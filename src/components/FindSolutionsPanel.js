import React from 'react';

// TODO: turn into a component and handle button click event by calling props.onSearchSolutions.

const FindSolutionsPanel = (props) => {

    let disabledStyle =  props.enabled ? '' : 'disabled';

    return (
        <div className="col s12">
            <button className={`btn input-field ${disabledStyle}`} type="submit">
                Find Solutions
            </button>
        </div>
    );
}

export default FindSolutionsPanel;