import React, { Component } from 'react';

class GenerationPanel extends Component {

    onLevelChanged = (evt) => {
        if (this.props.onLevelSelected) {
            this.props.onLevelSelected(parseInt(evt.target.value));
        }
        evt.preventDefault();
    }

    onGenerateBoard = (evt) => {
        if (this.props.onGenerateBoard) {
            this.props.onGenerateBoard()
        }
        evt.preventDefault();
    }

    render() {

        let disabledStyle = this.props.enabled ? '' : 'disabled';

        return (
            <div>
                <div className="input-field col s4">
                    <select id="difficulty" onChange={this.onLevelChanged}>
                        <option value="1">Easy</option>
                        <option value="2">Medium</option>
                        <option value="3">Hard</option>
                    </select>
                    <label htmlFor="difficulty">Board Difficulty</label>
                </div>
                <div>
                    <button className={`btn input-field col offset-s1 ${disabledStyle}`}
                            onClick={this.onGenerateBoard}
                            type="submit">
                        Generate Board
                </button>
                </div>
            </div>
        )
    }

}

export default GenerationPanel;