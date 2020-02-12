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
            console.log(`response from generation request:`);
            console.log(resp);
            console.log('GenStatus query url:');
            console.log(resp.headers.location);
            // TODO start polling url from location header until the board is generated.
        });
    }

    onLevelSelected = (newLevel) => {
        let newGenStatus = {...this.state.genStatus};
        newGenStatus.level = newLevel;
        this.setState({
            genStatus: newGenStatus
        });
        console.log('genStatus set to:');
        console.log(newGenStatus)
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
            board: boardClone.values
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
