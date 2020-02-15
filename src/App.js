import React, { Component } from 'react';
import axios from 'axios';

import Board from './components/Board';
import FindSolutionsPanel from './components/FindSolutionsPanel';
import GenerationPanel from './components/GenerationPanel';
import SolutionBoard from './components/SolutionBoard';

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
    }

    pollBoardGeneration = (pollUrl) => {
        axios.get(
            pollUrl
        ).then((resp) => {
            if (resp.data.status === 'GeneratorResult.NO_ERROR') {
                // Board generation completed.
                let newGenStatus = {...this.state.genStatus};
                let newBoard = {...this.state.board};
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
                // We always trust the server side generation logic...
                newBoard.isValid = true;
                newBoard.isComplete = false;
                newBoard.isEmpty = false;
                newBoard.invalidPositions = [];
                this.setState({
                    board: newBoard,
                    genStatus: newGenStatus
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

    onGenerateBoard = () => {
        let newState = {
            genStatus: {
                generating: true,
                generationError: false,
                level: this.state.genStatus.level,
                curStep: 0,
                totalSteps: 0
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
                <Board board={this.state.board} onValueSet={this.onValueSet} />
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
                                onLevelSelected={this.onLevelSelected}
                                onGenerateBoard={this.onGenerateBoard} />
                        </div>
                        {boardDisplay}
                        {boardStatusLine}
                    </div>
                    <div className="col s12 l4 offset-l1">
                        <div className="row">
                            <FindSolutionsPanel />
                        </div>
                        <div className="row">
                            <div className="col">
                                <SolutionBoard />
                            </div>
                            <div className="col">
                                <SolutionBoard />
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
