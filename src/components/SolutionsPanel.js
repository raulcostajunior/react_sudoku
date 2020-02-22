import React from 'react';
import SolutionBoard from './SolutionBoard';

const SolutionsPanel = (props) => {
    console.log('Will render solutions!!');
    console.log(props);
    return (<div>
             { props.solutions.map((solution, idx) => (
                 <div className="col" key={`sol_${idx}`}>
                     <SolutionBoard board={solution} readOnlyPositions={props.readOnlyPositions} />
                 </div>
                ))
             }
           </div>);
}

export default SolutionsPanel;