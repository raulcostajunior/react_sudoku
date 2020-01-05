import React from 'react';

const GenerationPanel = props => {

    return (
        <div>
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
    )

}

export default GenerationPanel;