import React, { Component } from 'react';
import './board.css';

class Board extends Component {

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
            return (<div>&nbsp;&nbsp;</div>);
        } else {
            return (<div>{elem}</div>);
        }
    }

    dynamicClassesAt = (row, col) => {
        // ${this.state.isFocused && this.state.focusRow === 0 && this.state.focusCol === 0 ? 'focused' : ''}
        let dynClasses = '';
        if (this.state.focusRow === row && this.state.focusCol === col &&
            !this.isReadOnlyPosition(row, col)) {
                dynClasses += ' focused';
        }
        if (this.isInvalidPosition(row, col) && !this.isReadOnlyPosition(row, col)) {
            dynClasses += ' invalid';
        }
        if (this.isReadOnlyPosition(row, col)) {
            dynClasses += ' readonly';
        }
        // console.log('dynamicClasses (' + row + ', ' + col +') = ' + dynClasses);
        return dynClasses;
    }

    isReadOnlyPosition = (row, col) => {
        let isReadOnly = false;
        for (let i = 0; i < this.props.board.readOnlyPositions.length; i++) {
            if (this.props.board.readOnlyPositions[i][0] === row &&
                this.props.board.readOnlyPositions[i][1] === col) {
                isReadOnly = true;
                break;
            }
        }
        return isReadOnly;
    }

    isInvalidPosition = (row, col) => {
        let isInvalid = false;
        for (let i = 0; i < this.props.board.invalidPositions.length; i++) {
            if (this.props.board.invalidPositions[i][0] === row &&
                this.props.board.invalidPositions[i][1] === col) {
                isInvalid = true;
                break;
            }
        }
        return isInvalid;
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
        let isReadOnly = this.isReadOnlyPosition(this.state.focusRow, this.state.focusCol);
        if (evt.keyCode >= 48 && evt.keyCode <= 57 && !isReadOnly) {
            handled = true;
            // User pressed a digit between 0 and 9 - sets the value at the board position
            if (this.props.onValueSet) {
                this.props.onValueSet(this.state.focusRow, this.state.focusCol, evt.keyCode - 48);
            }
        } else if (evt.keyCode === 37) {
            handled = true;
            // User pressed ArrowLeft - searches for next non read-only position to the left.
            let newFocusCol = this.state.focusCol-1;
            while (newFocusCol >= 0 && this.isReadOnlyPosition(this.state.focusRow, newFocusCol)) {
                newFocusCol--;
            }
            if (newFocusCol >= 0) {
                this.setState({
                    focusCol: newFocusCol,
                    focusRow: this.state.focusRow
                });
            }
        } else if (evt.keyCode === 38) {
            handled = true;
            // User pressed ArrowUp - searches for next non read-only position up.
            let newFocusRow = this.state.focusRow - 1;
            while (newFocusRow >= 0 && this.isReadOnlyPosition(newFocusRow, this.state.focusCol)) {
                newFocusRow--;
            }
            if (newFocusRow >= 0) {
                this.setState({
                    focusCol: this.state.focusCol,
                    focusRow: newFocusRow
                });
            }
        } else if (evt.keyCode === 39) {
            handled = true;
            // User pressed ArrowRight - searches for next non read-only position to the right.
            let newFocusCol = this.state.focusCol+1;
            while (newFocusCol <= 8 && this.isReadOnlyPosition(this.state.focusRow, newFocusCol)) {
                newFocusCol++;
            }
            if (newFocusCol <= 8) {
                this.setState({
                    focusCol: newFocusCol,
                    focusRow: this.state.focusRow
                });
            }
        } else if (evt.keyCode === 40) {
            handled = true;
            // User pressed ArrowDown - searches for next non read-only position down.
            let newFocusRow = this.state.focusRow + 1;
            while (newFocusRow <= 8 && this.isReadOnlyPosition(newFocusRow, this.state.focusCol)) {
                newFocusRow++;
            }
            if (newFocusRow <= 8) {
                this.setState({
                    focusCol: this.state.focusCol,
                    focusRow: newFocusRow
                });
            }
        } else if (evt.keyCode === 8 && !isReadOnly) {
            // User pressed Backspace - deletes the current position and "returns"
            // the focus.
            handled = true;
            let focusPos = this.state.focusRow*9 + this.state.focusCol;
            if (this.props.onValueSet) {
                this.props.onValueSet(this.state.focusRow, this.state.focusCol, 0);
            }
            focusPos--;
            while (focusPos >= 0 &&
                    this.isReadOnlyPosition(Math.trunc(focusPos / 9), focusPos %9)) {
                focusPos--;
            }
            if (focusPos >= 0) {
                this.setState({
                    focusRow: Math.trunc(focusPos / 9),
                    focusCol: focusPos %9
                });
            }
        } else if (evt.keyCode === 46 && !isReadOnly) {
            // User pressed Delete - deletes the current position.
            handled = true;
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
        if (!this.isReadOnlyPosition(boardRow, boardCol)) {
            // Updates the board focus to match the clicked position.
            this.setState({
                focusCol: boardCol,
                focusRow: boardRow
            });
        }
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
                            <td className={`left-border top-border ${this.dynamicClassesAt(0, 0)}`}>
                                {this.elementAt(0, 0)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(0, 1)}`}>
                                {this.elementAt(0, 1)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(0, 2)}`}>
                                {this.elementAt(0, 2)}
                            </td>
                            <td className={`top-border left-border ${this.dynamicClassesAt(0, 3)}`}>
                                {this.elementAt(0, 3)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(0, 4)}`}>
                                {this.elementAt(0, 4)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(0, 5)}`}>
                                {this.elementAt(0, 5)}
                            </td>
                            <td className={`left-border top-border ${this.dynamicClassesAt(0, 6)}`}>
                                {this.elementAt(0, 6)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(0, 7)}`}>
                                {this.elementAt(0, 7)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(0, 8)}`}>
                                {this.elementAt(0, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border ${this.dynamicClassesAt(1, 0)}`}>
                                {this.elementAt(1, 0)}
                            </td>
                            <td className={`${this.dynamicClassesAt(1, 1)}`}>
                                {this.elementAt(1, 1)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(1, 2)}`}>
                                {this.elementAt(1, 2)}
                            </td>
                            <td className={`left-border ${this.dynamicClassesAt(1, 3)}`}>
                                {this.elementAt(1, 3)}
                            </td>
                            <td className={`${this.dynamicClassesAt(1, 4)}`}>
                                {this.elementAt(1, 4)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(1, 5)}`}>
                                {this.elementAt(1, 5)}
                            </td>
                            <td className={`left-border ${this.dynamicClassesAt(1, 6)}`}>
                                {this.elementAt(1, 6)}
                            </td>
                            <td className={`${this.dynamicClassesAt(1, 7)}`}>
                                {this.elementAt(1, 7)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(1, 8)}`}>
                                {this.elementAt(1, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border bottom-border ${this.dynamicClassesAt(2, 0)}`}>
                                {this.elementAt(2, 0)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(2, 1)}`}>
                                {this.elementAt(2, 1)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(2, 2)}`}>
                                {this.elementAt(2, 2)}
                            </td>
                            <td className={`bottom-border left-border ${this.dynamicClassesAt(2, 3)}`}>
                                {this.elementAt(2, 3)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(2, 4)}`}>
                                {this.elementAt(2, 4)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(2, 5)}`}>
                                {this.elementAt(2, 5)}
                            </td>
                            <td className={`left-border bottom-border ${this.dynamicClassesAt(2, 6)}`}>
                                {this.elementAt(2, 6)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(2, 7)}`}>
                                {this.elementAt(2, 7)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(2, 8)}`}>
                                {this.elementAt(2, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border top-border ${this.dynamicClassesAt(3, 0)}`}>
                                {this.elementAt(3, 0)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(3, 1)}`}>
                                {this.elementAt(3, 1)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(3, 2)}`}>
                                {this.elementAt(3, 2)}
                            </td>
                            <td className={`top-border left-border ${this.dynamicClassesAt(3, 3)}`}>
                                {this.elementAt(3, 3)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(3, 4)}`}>
                                {this.elementAt(3, 4)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(3, 5)}`}>
                                {this.elementAt(3, 5)}
                            </td>
                            <td className={`left-border top-border ${this.dynamicClassesAt(3, 6)}`}>
                                {this.elementAt(3, 6)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(3, 7)}`}>
                                {this.elementAt(3, 7)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(3, 8)}`}>
                                {this.elementAt(3, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border ${this.dynamicClassesAt(4, 0)}`}>
                                {this.elementAt(4, 0)}
                            </td>
                            <td className={`${this.dynamicClassesAt(4, 1)}`}>
                                {this.elementAt(4, 1)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(4, 2)}`}>
                                {this.elementAt(4, 2)}
                            </td>
                            <td className={`left-border ${this.dynamicClassesAt(4, 3)}`}>
                                {this.elementAt(4, 3)}
                            </td>
                            <td className={`${this.dynamicClassesAt(4, 4)}`}>
                                {this.elementAt(4, 4)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(4, 5)}`}>
                                {this.elementAt(4, 5)}
                            </td>
                            <td className={`left-border ${this.dynamicClassesAt(4, 6)}`}>
                                {this.elementAt(4, 6)}
                            </td>
                            <td className={`${this.dynamicClassesAt(4, 7)}`}>
                                {this.elementAt(4, 7)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(4, 8)}`}>
                                {this.elementAt(4, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border bottom-border ${this.dynamicClassesAt(5, 0)}`}>
                                {this.elementAt(5, 0)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(5, 1)}`}>
                                {this.elementAt(5, 1)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(5, 2)}`}>
                                {this.elementAt(5, 2)}
                            </td>
                            <td className={`bottom-border left-border ${this.dynamicClassesAt(5, 3)}`}>
                                {this.elementAt(5, 3)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(5, 4)}`}>
                                {this.elementAt(5, 4)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(5, 5)}`}>
                                {this.elementAt(5, 5)}
                            </td>
                            <td className={`left-border bottom-border ${this.dynamicClassesAt(5, 6)}`}>
                                {this.elementAt(5, 6)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(5, 7)}`}>
                                {this.elementAt(5, 7)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(5, 8)}`}>
                                {this.elementAt(5, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border top-border ${this.dynamicClassesAt(6, 0)}`}>
                                {this.elementAt(6, 0)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(6, 1)}`}>
                                {this.elementAt(6, 1)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(6, 2)}`}>
                                {this.elementAt(6, 2)}
                            </td>
                            <td className={`top-border left-border ${this.dynamicClassesAt(6, 3)}`}>
                                {this.elementAt(6, 3)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(6, 4)}`}>
                                {this.elementAt(6, 4)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(6, 5)}`}>
                                {this.elementAt(6, 5)}
                            </td>
                            <td className={`left-border top-border ${this.dynamicClassesAt(6, 6)}`}>
                                {this.elementAt(6, 6)}
                            </td>
                            <td className={`top-border ${this.dynamicClassesAt(6, 7)}`}>
                                {this.elementAt(6, 7)}
                            </td>
                            <td className={`top-border right-border ${this.dynamicClassesAt(6, 8)}`}>
                                {this.elementAt(6,8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border ${this.dynamicClassesAt(7, 0)}`}>
                                {this.elementAt(7, 0)}
                            </td>
                            <td className={`${this.dynamicClassesAt(7, 1)}`}>
                                {this.elementAt(7, 1)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(7, 2)}`}>
                                {this.elementAt(7, 2)}
                            </td>
                            <td className={`left-border ${this.dynamicClassesAt(7, 3)}`}>
                                {this.elementAt(7, 3)}
                            </td>
                            <td className={`${this.dynamicClassesAt(7, 4)}`}>
                                {this.elementAt(7, 4)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(7, 5)}`}>
                                {this.elementAt(7, 5)}
                            </td>
                            <td className={`left-border ${this.dynamicClassesAt(7, 6)}`}>
                                {this.elementAt(7, 6)}
                            </td>
                            <td className={`${this.dynamicClassesAt(7, 7)}`}>
                                {this.elementAt(7, 7)}
                            </td>
                            <td className={`right-border ${this.dynamicClassesAt(7, 8)}`}>
                                {this.elementAt(7, 8)}
                            </td>
                        </tr>
                        <tr>
                            <td className={`left-border bottom-border ${this.dynamicClassesAt(8, 0)}`}>
                                {this.elementAt(8, 0)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(8, 1)}`}>
                                {this.elementAt(8, 1)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(8, 2)}`}>
                                {this.elementAt(8, 2)}
                            </td>
                            <td className={`bottom-border left-border ${this.dynamicClassesAt(8, 3)}`}>
                                {this.elementAt(8, 3)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(8, 4)}`}>
                                {this.elementAt(8, 4)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(8, 5)}`}>
                                {this.elementAt(8, 5)}
                            </td>
                            <td className={`left-border bottom-border ${this.dynamicClassesAt(8, 6)}`}>
                                {this.elementAt(8, 6)}
                            </td>
                            <td className={`bottom-border ${this.dynamicClassesAt(8, 7)}`}>
                                {this.elementAt(8, 7)}
                            </td>
                            <td className={`bottom-border right-border ${this.dynamicClassesAt(8, 8)}`}>
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