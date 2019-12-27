import React, { Component } from 'react';

// Important info:
// https://www.garysnotebook.com/20190314_1 (How to use MaterializeCss JS with React)
// https://codepen.io/cpett/pen/gmJygO (MaterializeCss scrollable tbody)
// Use custom css styles for board components
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
                    <div className="col s12">
                        <div className="divider"></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 l8">
                        <div className="section">
                            <div className="row">
                                <div className="input-field col s4">
                                    <select id="difficulty">
                                        <option value="1">Easy</option>
                                        <option value="2">Medium</option>
                                        <option value="3">Hard</option>
                                    </select>
                                    <label for="difficulty">Board Difficulty</label>
                                </div>
                                <div>
                                    <button className="btn input-field col offset-s1" type="submit">
                                        Generate Board
                                </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-panel">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                    <tr>
                                        <td>&nbsp;</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={{ color: 'gray' }}>Board Status: <b>Empty</b></p>
                    </div>
                    <div className="col s12 l4">
                        <div className="section">
                            <div className="row">
                                <div className="col s8">
                                    <button className="btn input-field" type="submit">
                                        Find Solutions
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="card-panel">
                            Solution #1
                        </div>
                        <div className="card-panel">
                            Solution #2
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
