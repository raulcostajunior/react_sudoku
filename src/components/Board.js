import React, { Component } from 'react';
import './board.css';

class Board extends Component {

    // TODO: focus board position on mouse down
    // TODO: refactor focused className test into an

    constructor() {
        super();
        this.state = {
            focusCol: 0,
            focusRow: 0,
            isFocused: false
        }
    }

    elementAt = (row, col) => {
        let pos = row * 9 + col;
        let elem = this.props.board.values[pos];
        if (elem === 0) {
            return (<div>&nbsp;</div>);
        } else {
            return (<div>{elem}</div>);
        }
    }

    onFocus = () => {
        this.setState ({
            focusCol: this.state.focusCol,
            focusRow: this.state.focusRow,
            isFocused: true
        });
    }

    onBlur = () => {
        this.setState ({
            focusCol: this.state.focusCol,
            focusRow: this.state.focusRow,
            isFocused: false
        });
    }

    onKeyDown = (evt) => {
        let handled = false;
        if (evt.keyCode >= 48 && evt.keyCode <= 57) {
            handled = true;
            // User pressed a digit between 0 and 9 - sets the value at the board position
            let focusPos = this.state.focusRow*9 + this.state.focusCol;
            if (this.props.onValueSet) {
                this.props.onValueSet(this.state.focusRow, this.state.focusCol, evt.keyCode - 48);
            }
            // Moves the focus to the next position - cycling around if necessary.
            focusPos = focusPos === 80 ? 0 : focusPos + 1;
            let newFocusRow = Math.trunc(focusPos / 9);
            let newFocusCol = focusPos % 9;
            this.setState({
                focusRow: newFocusRow,
                focusCol: newFocusCol
            });
        } else if (evt.keyCode === 37) {
            handled = true;
            // User pressed ArrowLeft
            let newFocusCol = this.state.focusCol === 0 ? 8 : this.state.focusCol - 1;
            this.setState({
                focusCol: newFocusCol,
                focusRow: this.state.focusRow
            });
        } else if (evt.keyCode === 38) {
            handled = true;
            // User pressed ArrowUp
            let newFocusRow = this.state.focusRow === 0 ? 8 : this.state.focusRow - 1;
            this.setState({
                focusCol: this.state.focusCol,
                focusRow: newFocusRow
            });
        } else if (evt.keyCode === 39) {
            handled = true;
            // User pressed ArrowRight
            let newFocusCol = this.state.focusCol === 8 ? 0 : this.state.focusCol + 1;
            this.setState({
                focusCol: newFocusCol,
                focusRow: this.state.focusRow
            });
        } else if (evt.keyCode === 40) {
            handled = true;
            // User pressed ArrowDown
            let newFocusRow = this.state.focusRow === 8 ? 0 : this.state.focusRow + 1;
            this.setState({
                focusCol: this.state.focusCol,
                focusRow: newFocusRow
            });
        } else if (evt.keyCode === 8) {
            handled = true;
            // User pressed Delete
            if (this.props.onValueSet) {
                this.props.onValueSet(this.state.focusRow, this.state.focusCol, 0);
            }
        }
        if (handled) {
            evt.preventDefault();
        }
    }

    onMouseDown = (evt) => {
        // Obtains the offsets of the board by traversing the DOM until the hosting tbody
        // is found.
        let elem = evt.target;
        while (elem.localName !== 'tbody') {
            elem = elem.parentNode;
        }
        let boardOffsetTop = elem.offsetParent.offsetTop;
        let boardOffsetLeft = elem.offsetParent.offsetLeft;
        // Determines the width and height of each board position.
        let colWidth = elem.clientWidth/9;
        let rowHeight = elem.clientHeight/9;
        // Determines the coordinates of the board position that has been clicked.
        let boardCol =
            Math.trunc((evt.clientX + evt.view.scrollX - boardOffsetLeft) / colWidth);
        let boardRow =
            Math.trunc((evt.clientY + evt.view.scrollY - boardOffsetTop) / rowHeight);
        // Updates the board focus to match the clicked position.
        this.setState({
            focusCol: boardCol,
            focusRow: boardRow
        });
    }

    render() {

        return (
            <div className="board" tabIndex="0"
                onKeyDown={this.onKeyDown}
                onMouseDown={this.onMouseDown}
                onFocus={this.onFocus}
                onBlur={this.onBlur}>
                <table style={{ fontSize: 'larger', marginTop: '1em', marginBottom: '1em' }}>
                    <tbody>
                        <tr>
                            <td className={`left-border top-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(0, 0)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(0, 1)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(0, 2)}
                            </td>
                            <td className={`top-border left-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(0, 3)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(0, 4)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(0, 5)}
                            </td>
                            <td className={`left-border top-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(0, 6)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(0, 7)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(0, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(1, 0)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(1, 1)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(1, 2)}
                            </td>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(1, 3)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(1, 4)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(1, 5)}
                            </td>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(1, 6)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(1, 7)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 1 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(1, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border bottom-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(2, 0)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(2, 1)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(2, 2)}
                            </td>
                            <td className={`bottom-border left-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(2, 3)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(2, 4)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(2, 5)}
                            </td>
                            <td className={`left-border bottom-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(2, 6)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(2, 7)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 2 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(2, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border top-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(3, 0)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(3, 1)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(3, 2)}
                            </td>
                            <td className={`top-border left-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(3, 3)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(3, 4)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(3, 5)}
                            </td>
                            <td className={`left-border top-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(3, 6)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(3, 7)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 3 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(3, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(4, 0)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(4, 1)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(4, 2)}
                            </td>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(4, 3)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(4, 4)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(4, 5)}
                            </td>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(4, 6)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(4, 7)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 4 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(4, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border bottom-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(5, 0)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(5, 1)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(5, 2)}
                            </td>
                            <td className={`bottom-border left-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(5, 3)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(5, 4)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(5, 5)}
                            </td>
                            <td className={`left-border bottom-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(5, 6)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(5, 7)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 5 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(5, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border top-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(6, 0)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(6, 1)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(6, 2)}
                            </td>
                            <td className={`top-border left-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(6, 3)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(6, 4)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(6, 5)}
                            </td>
                            <td className={`left-border top-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(6, 6)}
                            </td>
                            <td className={`top-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(6, 7)}
                            </td>
                            <td className={`top-border right-border ${this.state.isFocused && this.state.focusRow === 6 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(6,8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(7, 0)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(7, 1)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(7, 2)}
                            </td>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(7, 3)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(7, 4)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(7, 5)}
                            </td>
                            <td className={`left-border ${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(7, 6)}
                            </td>
                            <td className={`${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(7, 7)}
                            </td>
                            <td className={`right-border ${this.state.isFocused && this.state.focusRow === 7 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(7, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border bottom-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 0 ? 'focused' : ''}`}>
                                {this.elementAt(8, 0)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 1 ? 'focused' : ''}`}>
                                {this.elementAt(8, 1)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 2 ? 'focused' : ''}`}>
                                {this.elementAt(8, 2)}
                            </td>
                            <td className={`bottom-border left-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 3 ? 'focused' : ''}`}>
                                {this.elementAt(8, 3)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 4 ? 'focused' : ''}`}>
                                {this.elementAt(8, 4)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 5 ? 'focused' : ''}`}>
                                {this.elementAt(8, 5)}
                            </td>
                            <td className={`left-border bottom-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 6 ? 'focused' : ''}`}>
                                {this.elementAt(8, 6)}
                            </td>
                            <td className={`bottom-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 7 ? 'focused' : ''}`}>
                                {this.elementAt(8, 7)}
                            </td>
                            <td className={`bottom-border right-border ${this.state.isFocused && this.state.focusRow === 8 && this.state.focusCol === 8 ? 'focused' : ''}`}>
                                {this.elementAt(8, 8)}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }

}

export default Board;