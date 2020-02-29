import React from 'react';

const FindSolutionsPanel = (props) => {

    let disabledStyle =  props.enabled ? '' : 'disabled';
    let panelBody = (
        <button className={`btn input-field ${disabledStyle}`}
            onClick={props.onSearchSolutions}
            type="submit">
            Find Solutions
        </button>
    );
    if (props.searching) {
        panelBody = (
            <button className="btn input-field"
                onClick={props.onCancelSearch}
                type="submit">
                Cancel Search
            </button>
        );
    }

    return (
        <div className="col s12">
            {panelBody}
        </div>
    );
}

export default FindSolutionsPanel;