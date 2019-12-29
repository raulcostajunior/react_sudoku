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
                    <div className="col s12 l7">
                        <div className="row">
                            <div className="input-field col s4">
                                <select id="difficulty">
                                    <option value="1">Easy</option>
                                    <option value="2">Medium</option>
                                    <option value="3">Hard</option>
                                </select>
                                <label htmlFor="difficulty">Board Difficulty</label>
                            </div>
                            <div>
                                <button className="btn input-field col offset-s1" type="submit">
                                    Generate Board
                                </button>
                            </div>
                        </div>
                        <div className="card">
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
                    <div className="col s12 l4 offset-l1">
                        <div className="row">
                            <div className="col s12">
                                <button className="btn input-field" type="submit">
                                    Find Solutions
                                    </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <table style={{ fontSize: 'smaller', marginTop: '1em', marginBottom: '1em' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderRight: '2px solid gray', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderRight: '2px solid gray', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="col">
                                <table style={{ fontSize: 'smaller', marginTop: '1em', marginBottom: '1em' }}>
                                    <tbody>
                                        <tr>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderRight: '2px solid gray', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderRight: '2px solid gray', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                        <tr style={{ border: '1px solid lightGray' }}>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>3</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>6</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                                            <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>9</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default App;
