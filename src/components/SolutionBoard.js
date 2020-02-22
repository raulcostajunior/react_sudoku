import React from 'react';
import './solutionBoard.css';

const SolutionBoard = (props) => {

    const elementAt = (row, col) => {
        let pos = row * 9 + col;
        let elem = props.board[pos];
        if (elem === 0) {
            return (<div>&nbsp;&nbsp;</div>);
        } else {
            return (<div>{elem}</div>);
        }
    }

    const dynamicClassesAt = (row, col) => {
        let dynClasses = '';
        if (isReadOnlyPosition(row, col)) {
            dynClasses += ' readonly';
        }
        return dynClasses;
    }

    const isReadOnlyPosition = (row, col) => {
        let isReadOnly = false;
        for (let i = 0; i < props.readOnlyPositions.length; i++) {
            if (props.readOnlyPositions[i][0] === row &&
                props.readOnlyPositions[i][1] === col) {
                isReadOnly = true;
                break;
            }
        }
        return isReadOnly;
    }

    return (
        <table className="solution-board">
            <tbody>
                <tr>
                    <td className={`left-border top-border ${dynamicClassesAt(0, 0)}`}>
                        {elementAt(0,0)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(0, 1)}`}>
                        {elementAt(0,1)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(0, 2)}`}>
                        {elementAt(0,2)}
                    </td>
                    <td className={`top-border left-border ${dynamicClassesAt(0, 3)}`}>
                        {elementAt(0,3)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(0, 4)}`}>
                        {elementAt(0,4)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(0, 5)}`}>
                        {elementAt(0,5)}
                    </td>
                    <td className={`left-border top-border ${dynamicClassesAt(0, 6)}`}>
                        {elementAt(0,6)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(0, 7)}`}>
                        {elementAt(0,7)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(0, 8)}`}>
                        {elementAt(0,8)}
                    </td>
                </tr>
                <tr>
                    <td className={`left-border ${dynamicClassesAt(1, 0)}`}>
                        {elementAt(1, 0)}
                    </td>
                    <td className={`${dynamicClassesAt(1, 1)}`}>
                        {elementAt(1, 1)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(1, 2)}`}>
                        {elementAt(1, 2)}
                    </td>
                    <td className={`left-border ${dynamicClassesAt(1, 3)}`}>
                        {elementAt(1, 3)}
                    </td>
                    <td className={`${dynamicClassesAt(1, 4)}`}>
                        {elementAt(1, 4)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(1, 5)}`}>
                        {elementAt(1, 5)}
                    </td>
                    <td className={`left-border ${dynamicClassesAt(1, 6)}`}>
                        {elementAt(1, 6)}
                    </td>
                    <td className={`${dynamicClassesAt(1, 7)}`}>
                        {elementAt(1, 7)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(1, 8)}`}>
                        {elementAt(1, 8)}
                    </td>
                </tr>
                <tr>
                    <td className={`bottom-border left-border ${dynamicClassesAt(2, 0)}`}>
                        {elementAt(2, 0)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(2, 1)}`}>
                        {elementAt(2, 1)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(2, 2)}`}>
                        {elementAt(2, 2)}
                    </td>
                    <td className={`bottom-border left-border ${dynamicClassesAt(2, 3)}`}>
                        {elementAt(2, 3)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(2, 4)}`}>
                        {elementAt(2, 4)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(2, 5)}`}>
                        {elementAt(2, 5)}
                    </td>
                    <td className={`bottom-border left-border ${dynamicClassesAt(2, 6)}`}>
                        {elementAt(2, 6)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(2, 7)}`}>
                        {elementAt(2, 7)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(2, 8)}`}>
                        {elementAt(2, 8)}
                    </td>
                </tr>
                <tr>
                    <td className={`top-border left-border ${dynamicClassesAt(3, 0)}`}>
                        {elementAt(3, 0)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(3, 1)}`}>
                        {elementAt(3, 1)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(3, 2)}`}>
                        {elementAt(3, 2)}
                    </td>
                    <td className={`top-border left-border ${dynamicClassesAt(3, 3)}`}>
                        {elementAt(3, 3)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(3, 4)}`}>
                        {elementAt(3, 4)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(3, 5)}`}>
                        {elementAt(3, 5)}
                    </td>
                    <td className={`top-border left-border ${dynamicClassesAt(3, 6)}`}>
                        {elementAt(3, 6)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(3, 7)}`}>
                        {elementAt(3, 7)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(3, 8)}`}>
                        {elementAt(3, 8)}
                    </td>
                </tr>
                <tr>
                    <td className={`left-border ${dynamicClassesAt(4, 0)}`}>
                        {elementAt(4, 0)}
                    </td>
                    <td className={`${dynamicClassesAt(4, 1)}`}>
                        {elementAt(4, 1)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(4, 2)}`}>
                        {elementAt(4, 2)}
                    </td>
                    <td className={`left-border ${dynamicClassesAt(4, 3)}`}>
                        {elementAt(4, 3)}
                    </td>
                    <td className={`${dynamicClassesAt(4, 4)}`}>
                        {elementAt(4, 4)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(4, 5)}`}>
                        {elementAt(4, 5)}
                    </td>
                    <td className={`left-border ${dynamicClassesAt(4, 6)}`}>
                        {elementAt(4, 6)}
                    </td>
                    <td className={`${dynamicClassesAt(4, 7)}`}>
                        {elementAt(4, 7)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(4, 8)}`}>
                        {elementAt(4, 8)}
                    </td>
                </tr>
                <tr>
                    <td className={`bottom-border left-border ${dynamicClassesAt(5, 0)}`}>
                        {elementAt(5, 0)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(5, 1)}`}>
                        {elementAt(5, 1)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(5, 2)}`}>
                        {elementAt(5, 2)}
                    </td>
                    <td className={`bottom-border left-border ${dynamicClassesAt(5, 3)}`}>
                        {elementAt(5, 3)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(5, 4)}`}>
                        {elementAt(5, 4)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(5, 5)}`}>
                        {elementAt(5, 5)}
                    </td>
                    <td className={`bottom-border left-border ${dynamicClassesAt(5, 6)}`}>
                        {elementAt(5, 6)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(5, 7)}`}>
                        {elementAt(5, 7)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(5, 8)}`}>
                        {elementAt(5, 8)}
                    </td>
                </tr>
                <tr>
                    <td className={`top-border left-border ${dynamicClassesAt(6, 0)}`}>
                        {elementAt(6, 0)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(6, 1)}`}>
                        {elementAt(6, 1)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(6, 2)}`}>
                        {elementAt(6, 2)}
                    </td>
                    <td className={`top-border left-border ${dynamicClassesAt(6, 3)}`}>
                        {elementAt(6, 3)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(6, 4)}`}>
                        {elementAt(6, 4)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(6, 5)}`}>
                        {elementAt(6, 5)}
                    </td>
                    <td className={`top-border left-border ${dynamicClassesAt(6, 6)}`}>
                        {elementAt(6, 6)}
                    </td>
                    <td className={`top-border ${dynamicClassesAt(6, 7)}`}>
                        {elementAt(6, 7)}
                    </td>
                    <td className={`top-border right-border ${dynamicClassesAt(6, 8)}`}>
                        {elementAt(6, 8)}
                    </td>
                </tr>
                <tr>
                    <td className={`left-border ${dynamicClassesAt(7, 0)}`}>
                        {elementAt(7, 0)}
                    </td>
                    <td className={`${dynamicClassesAt(7, 1)}`}>
                        {elementAt(7, 1)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(7, 2)}`}>
                        {elementAt(7, 2)}
                    </td>
                    <td className={`left-border ${dynamicClassesAt(7, 3)}`}>
                        {elementAt(7, 3)}
                    </td>
                    <td className={`${dynamicClassesAt(7, 4)}`}>
                        {elementAt(7, 4)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(7, 5)}`}>
                        {elementAt(7, 5)}
                    </td>
                    <td className={`left-border ${dynamicClassesAt(7, 6)}`}>
                        {elementAt(7, 6)}
                    </td>
                    <td className={`${dynamicClassesAt(7, 7)}`}>
                        {elementAt(7, 7)}
                    </td>
                    <td className={`right-border ${dynamicClassesAt(7, 8)}`}>
                        {elementAt(7, 8)}
                    </td>
                </tr>
                <tr>
                    <td className={`bottom-border left-border ${dynamicClassesAt(8, 0)}`}>
                        {elementAt(8, 0)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(8, 1)}`}>
                        {elementAt(8, 1)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(8, 2)}`}>
                        {elementAt(8, 2)}
                    </td>
                    <td className={`bottom-border left-border ${dynamicClassesAt(8, 3)}`}>
                        {elementAt(8, 3)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(8, 4)}`}>
                        {elementAt(8, 4)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(8, 5)}`}>
                        {elementAt(8, 5)}
                    </td>
                    <td className={`bottom-border left-border ${dynamicClassesAt(8, 6)}`}>
                        {elementAt(8, 6)}
                    </td>
                    <td className={`bottom-border ${dynamicClassesAt(8, 7)}`}>
                        {elementAt(8, 7)}
                    </td>
                    <td className={`bottom-border right-border ${dynamicClassesAt(8, 8)}`}>
                        {elementAt(8, 8)}
                    </td>
                </tr>
            </tbody>
        </table>
    )

}

export default SolutionBoard;