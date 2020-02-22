import React, { Component } from 'react';
import axios from 'axios';

import Board from './components/Board';
import FindSolutionsPanel from './components/FindSolutionsPanel';
import GenerationPanel from './components/GenerationPanel';
import SolutionsPanel from './components/SolutionsPanel';

const API_BASE_URL = 'http://api-sudoku.herokuapp.com';

class App extends Component {

    constructor() {
        super();
        this.M = window.M;
        this.state = {
            board: {
                values: Array(81).fill(0),
                // List of read-only board positions.
                // Each position is defined by a [row, col] array.
                readOnlyPositions: [],
                isValid: true,
                isComplete: false,
                isEmpty: true,
                // List of invalid board positions.
                // Each position is defined by a [row, col] array.
                invalidPositions: []
            },
            genStatus: {
                generating: false,
                generationError: false,
                level: 1,
                curStep: 0,
                totalSteps: 0
            },
            solSearchStatus: {
                searching: false,
                searchingError: false,
                searchTimeSecs: 0.0,
                progress: 0.0,
                foundSoFar: 0,
                solutions: [

                ] // Array of values arrays
            }
        }
    }

    componentDidMount() {
        let selectElems = document.querySelectorAll("select");
        this.M.FormSelect.init(selectElems);
        this.onGenerateBoard();
    }

    pollBoardGeneration = (pollUrl) => {
        axios.get(
            pollUrl
        ).then((resp) => {
            if (resp.data.status === 'GeneratorResult.NO_ERROR') {
                // Board generation completed.
                let newGenStatus = {...this.state.genStatus};
                let newBoard = {...this.state.board};
                let newSolSearchStatus = {...this.state.solSearchStatus};
                newGenStatus.generating = false;
                newBoard.values = resp.data.board;
                let roPositions = [];
                for (let i = 0; i < resp.data.board.length; i++) {
                    if (resp.data.board[i] !== 0) {
                        let row = Math.trunc(i / 9);
                        let col = i % 9;
                        let roPosition = [row, col];
                        roPositions.push(roPosition);
                    }
                }
                newBoard.readOnlyPositions = roPositions;
                newSolSearchStatus.solutions = [];
                // We always trust the server side generation logic...
                newBoard.isValid = true;
                newBoard.isComplete = false;
                newBoard.isEmpty = false;
                newBoard.invalidPositions = [];
                this.setState({
                    board: newBoard,
                    genStatus: newGenStatus,
                    solSearchStatus: newSolSearchStatus
                });
            } else if (resp.data.status === 'generating') {
                // Board generation in progress; schedule next polling call.
                setTimeout(() => {
                    this.pollBoardGeneration(pollUrl);
                }, 250);

            } else {
                // Assume an error happened.
                let newGenStatus = {...this.state.genStatus};
                newGenStatus.generationError = true;
                newGenStatus.generating = false;
                this.setState({
                    genStatus: newGenStatus
                });
            }
        });
    }


    pollSolutionSearching = (pollUrl) => {
        axios.get(
            pollUrl
        ).then((resp) => {
            if (resp.data.status === 'SolverResult.NO_ERROR') {
                // Solution searching completed.
                let newSolSearchStatus = {...this.state.solSearchStatus};
                newSolSearchStatus.searching = false;
                newSolSearchStatus.searchingError = false;
                newSolSearchStatus.progress = 100.0;
                newSolSearchStatus.solutions = resp.data.solved_boards;
                newSolSearchStatus.searchTimeSecs = resp.data.solve_time;
                this.setState({
                     solSearchStatus: newSolSearchStatus
                });
            } else if (resp.data.status === 'SolverResult.HAS_NO_SOLUTION' ||
                       resp.data.status === 'SolverResult.INVALID_BOARD') {
                let newSolSearchStatus = {...this.state.solSearchStatus};
                newSolSearchStatus.searching = false;
                newSolSearchStatus.searchingError = false;
                newSolSearchStatus.progress = 100.0;
                newSolSearchStatus.solutions = [];
                newSolSearchStatus.searchTimeSecs = resp.data.solve_time;
                this.setState({
                    solSearchStatus: newSolSearchStatus
                });
            }
            else if (resp.data.status === 'solving') {
                // Solution search in progress; update progress and schedule next polling call.
                let newSolSearchStatus = {...this.state.solSearchStatus};
                newSolSearchStatus.progress = resp.data.progress_percent;
                newSolSearchStatus.foundSoFar = resp.data.num_solutions;
                this.setState({
                    solSearchStatus: newSolSearchStatus
                });
                let waitMillis = (resp.data.progress >= 98.0 ? 250 : 1000);
                setTimeout(() => {
                    this.pollSolutionSearching(pollUrl);
                }, waitMillis);
            } else {
                // Assume an error happened.
                let newSolSearchStatus = {...this.state.solSearchStatus};
                newSolSearchStatus.searchingError = true;
                newSolSearchStatus.searching = false;
                newSolSearchStatus.solutions = [];
                newSolSearchStatus.progress = 0.0;
                newSolSearchStatus.foundSoFar = 0;
                this.setState({
                    genStatus: newSolSearchStatus
                });
            }
        });
    }

    onSearchSolutions = () => {
        if (this.state.genStatus.generating ||
            this.state.solSearchStatus.searching) {
                // Doesn't trigger solutions searching while generating or searching solutions
                return;
        }

        let newState = {
            solSearchStatus: {
                searching: true,
                searchingError: false,
                progress: 0.0,
                foundSoFar: 0,
                solutions: []
            }
        };
        this.setState(newState);

        axios.post(API_BASE_URL +
                      `/v1/solved-board/all`,
                   {'board': this.state.board.values}
        ).then((resp) => {
            if (resp.status !== 202) {
                let newSolSearchStatus = {...this.state.solSearcchStatus};
                newSolSearchStatus.searchingError = true;
                newSolSearchStatus.searching = false;
                newSolSearchStatus.solutions = [];
                this.setState({
                    solSearchStatus: newSolSearchStatus
                });
            } else {
                // Request submitted successfully - start polling searching progress.
                this.pollSolutionSearching(resp.headers.location);
            }
        });
    }


    onGenerateBoard = () => {
        if (this.state.genStatus.generating ||
            this.state.solSearchStatus.searching) {
                // Doesn't trigger board generations while generating or searching solutions
                return;
        }
        let newState = {
            genStatus: {
                generating: true,
                generationError: false,
                level: this.state.genStatus.level,
                curStep: 0,
                totalSteps: 0
            },
            solSearchStatus: {
                searching: false,
                searchingError: false,
                searchTimeSecs: 0.0,
                progress: 0.0,
                foundSoFar: 0,
                solutions: []
            }
        };
        this.setState(newState);

        axios.post(API_BASE_URL +
                   `/v1/board/?difficultyLevel=${this.state.genStatus.level}`
        ).then((resp) => {
            if (resp.status !== 202) {
                let newGenStatus = {...this.state.genStatus};
                newGenStatus.generationError = true;
                newGenStatus.generating = false;
                this.setState({
                    genStatus: newGenStatus
                });
            } else {
                // Generation request submitted successfully - start polling generation progress.
                this.pollBoardGeneration(resp.headers.location);
            }
        });
    }


    onLevelSelected = (newLevel) => {
        let newGenStatus = {...this.state.genStatus};
        newGenStatus.level = newLevel;
        this.setState({
            genStatus: newGenStatus
        });
    }

    boardStatusFromState = () => {
        if (!this.state.board.isValid) {
            return 'Invalid';
        } else if (this.state.board.isComplete) {
            return 'Complete';
        } else if (this.state.board.isEmpty) {
            return 'Empty';
        } else return 'Valid';
    }

    onValueSet = (lin, col, value) => {
        let boardClone = {...this.state.board};
        let valuesClone = [...this.state.board.values];
        valuesClone[lin*9 + col] = value;
        boardClone.values = valuesClone;
        this.setState({
            board: boardClone
        });
        axios.post(API_BASE_URL + '/v1/board/status', {
            board: valuesClone
        }).then((resp) => {
            if (resp.status === 200) {
                let boardClone = {...this.state.board};
                boardClone.isValid = resp.data.isValid;
                boardClone.isEmpty = resp.data.isEmpty;
                boardClone.isComplete = resp.data.isComplete;
                boardClone.invalidPositions = [...resp.data.invalidPositions];
                this.setState({
                    board: boardClone
                });
            }
        });
    }

    render() {

        // Whenever the board is being generated, it should be replaced by a message reflecting
        // the generation status.
        let levelText = 'Easy';
        if (this.state.genStatus.level === 2) {
            levelText = 'Medium';
        } else if (this.state.genStatus.level === 3) {
            levelText = 'Hard';
        }

        let boardDisplay = (
            <div>
                <Board board={this.state.board}
                       onValueSet={this.onValueSet} />
            </div>
        );
        if (this.state.genStatus.generating) {
            boardDisplay = (
                <div>
                    <div className="progress">
                        <div className="indeterminate"></div>
                    </div>
                    <p className="smaller">generating <b>{levelText}</b> board...</p>
                </div>
            )
        } else if (this.state.genStatus.generationError) {
            boardDisplay = (
                <div>
                    <p className="red-text">
                        Error generating {levelText} board.<br/>
                        Please try again.
                    </p>
                </div>
            )
        }

        let solutionsDisplay = (
            <SolutionsPanel solutions={this.state.solSearchStatus.solutions}
                            readOnlyPositions={this.state.board.readOnlyPositions}
                            searchTime={this.state.solSearchStatus.searchTimeSecs} />
        );
        if (this.state.solSearchStatus.searching) {
            solutionsDisplay = (
                <div className="col s12">
                    <div className="progress">
                        <div className="indeterminate">
                        </div>
                    </div>
                    <p style={{color: 'gray', textAlign: 'center'}}>
                        <b>{this.state.solSearchStatus.progress.toFixed(2)} %</b>
                        <br />
                       found {this.state.solSearchStatus.foundSoFar} so far
                    </p>
                </div>
            )
        } else if (this.state.solSearchStatus.searchingError) {
            solutionsDisplay = (
                <div>
                    <p className="red-text">
                        Error searching board solutions.<br/>
                        Please try again.
                    </p>
                </div>
            )
        }

        // The board status line below the board should only be rendered when the board
        // is not being generated.
        let boardStatusLine = (
            <div>
              <p style={{ color: 'gray' }}>Board Status: <b>{this.boardStatusFromState()}</b></p>
            </div>
          );
        if (this.state.genStatus.generating) {
            boardStatusLine = <div>&nbsp;</div>;
        }

        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5>React Sudoku</h5>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l7">
                        <div className="row">
                            <GenerationPanel
                                enabled={!this.state.genStatus.generating &&
                                         !this.state.solSearchStatus.searching}
                                onLevelSelected={this.onLevelSelected}
                                onGenerateBoard={this.onGenerateBoard} />
                        </div>
                        {boardDisplay}
                        {boardStatusLine}
                    </div>
                    <div className="col s12 l4 offset-l1">
                        <div className="row">
                            <FindSolutionsPanel
                                enabled={!this.state.genStatus.generating &&
                                         !this.state.solSearchStatus.searching &&
                                         this.state.board.isValid &&
                                         !this.state.board.isComplete &&
                                         !this.state.board.isEmpty}
                                onSearchSolutions={this.onSearchSolutions} />
                        </div>
                        <div className="row">
                            {solutionsDisplay}
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
