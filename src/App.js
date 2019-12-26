import React from 'react';

// Important info:
// https://www.garysnotebook.com/20190314_1 (How to use MaterializeCss JS with React)
// https://codepen.io/cpett/pen/gmJygO (MaterializeCss scrollable tbody)
function App() {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12 m8">
                    <div className="card-panel">
                        <h5>Generator Panel</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m8">
                    <div className="card-panel">
                        <h5>Board Panel</h5>
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
                </div>
                <div className="col s12 m4">
                    <div className="card-panel">
                        <h5>Solutions Panel</h5>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col s12 m8">
                    <div className="card-panel">
                        <h5>Status Panel</h5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
