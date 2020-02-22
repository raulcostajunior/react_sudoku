import React from 'react';
import SolutionBoard from './SolutionBoard';

const SolutionsPanel = (props) => {

    let status = "";
    if (props.searchTime > 0.0) {
        if (props.solutions.length === 0) {
            status = (
                <div className="col smaller">
                    <p style={{ color: 'gray' }}>Board has <b>no</b> solution.</p>
                    <p style={{ color: 'gray' }}>Search time: <b>{props.searchTime.toFixed(2)}</b> secs.</p>
                </div>
            );
        } else {
            status = (
                <div className="col smaller">
                    <p style={{ color: 'gray' }}>Search time: <b>{props.searchTime.toFixed(2)}</b> secs.</p>
                </div>
            );
        }
    }

    return (<div>
             { props.solutions.map((solution, idx) => (
                 <div className="col" key={`sol_${idx}`}>
                     <div><span className="new badge" data-badge-caption="">{idx+1}</span></div>
                     <SolutionBoard board={solution} readOnlyPositions={props.readOnlyPositions} />
                     <div>&nbsp;</div>
                 </div>
                ))
             }
             {status}
           </div>);
}

export default SolutionsPanel;