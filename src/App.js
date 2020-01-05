import React, { Component } from 'react';

import Board from './components/Board';
import FindSolutionsPanel from './components/FindSolutionsPanel';
import GenerationPanel from './components/GenerationPanel';
import SolutionBoard from './components/SolutionBoard';

class App extends Component {
    constructor() {
        super();
        this.M = window.M;
    }

    componentDidMount() {
        let selectElems = document.querySelectorAll("select");
        this.M.FormSelect.init(selectElems);
    }

    render() {
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
                        <div>
                            <Board />
                        </div>
                        <p style={{ color: 'gray' }}>Board Status: <b>Empty</b></p>
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
