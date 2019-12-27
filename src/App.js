import React from 'react';

// Important info:
// https://www.garysnotebook.com/20190314_1 (How to use MaterializeCss JS with React)
// https://codepen.io/cpett/pen/gmJygO (MaterializeCss scrollable tbody)
// Use custom css styles for board components
function App() {
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
                        <h6>Generator Panel</h6>
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
                    <p style={{color: 'gray'}}>Board Status: <b>Empty</b></p>
                </div>
                <div className="col s12 l4">
                    <div className="section">
                        <h6>Solutions Panel</h6>
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

export default App;
