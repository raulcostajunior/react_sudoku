import React from 'react';

// Important info:
// https://www.garysnotebook.com/20190314_1 (How to use MaterializeCss JS with React)
// https://codepen.io/cpett/pen/gmJygO (MaterializeCss scrollable tbody)
// Use custom css styles for board components
function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 xl8 offset-xl2">
                    <div className="card-panel">
                        <h6>Generator Panel</h6>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 xl8 offset-xl2">
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
                            <tfoot>
                                <tr>
                                    <td>Status: Empty</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 xl8 offset-xl2">
                    <div className="card-panel">
                        <h6>Solutions Panel</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
