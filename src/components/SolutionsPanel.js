import React from 'react';
import SolutionBoard from './SolutionBoard';

const SolutionsPanel = (props) => {
    return (<div>
             { props.solutions.map(solution => (
                 <div className="col">
                     <SolutionBoard board={solution} readOnlyPositions={props.readOnlyPositions} />
                 </div>
                ))
             }
           </div>);
}

export default SolutionsPanel;