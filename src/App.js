import React, { Component } from 'react';

import Board from './components/Board';
import FindSolutionsPanel from './components/FindSolutionsPanel';
import GenerationPanel from './components/GenerationPanel';
import SolutionBoard from './components/SolutionBoard';

class App extends Component {
    constructor() {
        super();
        this.M = window.M;
        this.state = {
            board: {
                values: Array(81).fill(0),
                // (lastRow, lastCol) indicate the last changed position in the board.
                // prevValue indicate the previous value of the last changed position in
                // the board. There three pieces of information are used to restore the
                // last previous valid state of the board in case of an invalid edit of
                // a position.
                lastCol: 0,
                lastRow: 0,
                prevValue: 0,
                isValid: true,
                isComplete: false,
                isEmpty: true
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

    generateBoard = () => {
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
    }

    boardStatusFromState = () => {
        if (!this.state.board.isValid) {
            return 'Invalid';
        } else if (this.state.board.isComplete) {
            return 'Complete';
        } else if (this.state.board.isEmpty) {
            return 'Empty';
        }
    }

    onValueSet = (col, lin, value) => {
        console.log(`Will set (${col}, ${lin}) to ${value}.`);
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
                            <GenerationPanel />
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
