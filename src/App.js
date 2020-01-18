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
                focusRow: 0,
                focusCol: 0,
                values: Array(81).fill(0),
                status: 'Empty'
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
                <Board board={this.state.board} />
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
              <p style={{ color: 'gray' }}>Board Status: <b>{this.state.board.status}</b></p>
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
