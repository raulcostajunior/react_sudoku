import React from 'react';

const FindSolutionsPanel = (props) => {

    let disabledStyle =  props.enabled ? '' : 'disabled';

    return (
        <div className="col s12">
            <button className={`btn input-field ${disabledStyle}`}
                onClick={props.onSearchSolutions}
                type="submit">
                Find Solutions
            </button>
        </div>
    );
}

export default FindSolutionsPanel;