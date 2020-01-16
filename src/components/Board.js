import React from 'react';
import './board.css';

const Board = (props) => {

    function elementAt(row, col) {
        let pos = row * 9 + col;
        let elem = props.board.values[pos];
        if (elem === 0) {
            return (<div>&nbsp;</div>);
        } else {
            return (<div>{elem}</div>);
        }
    }

    return (

        <div className="board">
            <table style={{ fontSize: 'larger', marginTop: '1em', marginBottom: '1em' }}>
                <tbody>
                    <tr>
                        <td className={`left-border top-border ${props.board.focusRow === 0 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(0, 0)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 0 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(0, 1)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 0 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(0, 2)}
                        </td>
                        <td className={`top-border left-border ${props.board.focusRow === 0 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(0, 3)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 0 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(0, 4)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 0 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(0, 5)}
                        </td>
                        <td className={`left-border top-border ${props.board.focusRow === 0 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(0,6)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 0 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(0,7)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 0 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(0,8)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border ${props.board.focusRow === 1 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(1,0)}
                        </td>
                        <td className={`${props.board.focusRow === 1 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(1,1)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 1 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(1,2)}
                        </td>
                        <td className={`left-border ${props.board.focusRow === 1 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(1,3)}
                        </td>
                        <td className={`${props.board.focusRow === 1 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(1,4)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 1 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(1,5)}
                        </td>
                        <td className={`left-border ${props.board.focusRow === 1 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(1,6)}
                        </td>
                        <td className={`${props.board.focusRow === 1 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(1,7)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 1 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(1,8)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(2,0)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(2,1)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 2 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(2,2)}
                        </td>
                        <td className={`bottom-border left-border ${props.board.focusRow === 2 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(2,3)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(2,4)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 2 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(2,5)}
                        </td>
                        <td className={`left-border bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(2,6)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(2,7)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 2 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(2,8)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border top-border ${props.board.focusRow === 3 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(3,0)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 3 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(3,1)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 3 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(3,2)}
                        </td>
                        <td className={`top-border left-border ${props.board.focusRow === 3 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(3,3)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 3 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(3,4)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 3 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(3,5)}
                        </td>
                        <td className={`left-border top-border ${props.board.focusRow === 3 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(3,6)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 3 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(3,7)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 3 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(3,8)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border ${props.board.focusRow === 4 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(4,0)}
                        </td>
                        <td className={`${props.board.focusRow === 4 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(4,1)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 4 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(4,2)}
                        </td>
                        <td className={`left-border ${props.board.focusRow === 4 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(4,3)}
                        </td>
                        <td className={`${props.board.focusRow === 4 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(4,4)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 4 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(4,5)}
                        </td>
                        <td className={`left-border ${props.board.focusRow === 4 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(4,6)}
                        </td>
                        <td className={`${props.board.focusRow === 4 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(4,7)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 4 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(4,8)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(5,0)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(5,1)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 5 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(5,2)}
                        </td>
                        <td className={`bottom-border left-border ${props.board.focusRow === 5 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(5,3)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(5,4)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 5 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(5,5)}
                        </td>
                        <td className={`left-border bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(5,6)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(5,7)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 5 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(5,8)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border top-border ${props.board.focusRow === 6 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(6,0)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 6 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(6,1)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 6 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(6,2)}
                        </td>
                        <td className={`top-border left-border ${props.board.focusRow === 6 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(6,3)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 6 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(6,4)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 6 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(6,5)}
                        </td>
                        <td className={`left-border top-border ${props.board.focusRow === 6 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(6,6)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 6 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(6,7)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 6 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(7,7)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border ${props.board.focusRow === 7 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(7,0)}
                        </td>
                        <td className={`${props.board.focusRow === 7 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(7,1)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 7 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(7,2)}
                        </td>
                        <td className={`left-border ${props.board.focusRow === 7 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(7,3)}
                        </td>
                        <td className={`${props.board.focusRow === 7 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(7,4)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 7 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(7,5)}
                        </td>
                        <td className={`left-border ${props.board.focusRow === 7 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(7,6)}
                        </td>
                        <td className={`${props.board.focusRow === 7 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(7,7)}
                        </td>
                        <td className={`right-border ${props.board.focusRow === 7 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(7,8)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 0 ? 'focused' : ''}`}>
                            {elementAt(8,0)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 1 ? 'focused' : ''}`}>
                            {elementAt(8,1)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 8 && props.board.focusCol === 2 ? 'focused' : ''}`}>
                            {elementAt(8,2)}
                        </td>
                        <td className={`bottom-border left-border ${props.board.focusRow === 8 && props.board.focusCol === 3 ? 'focused' : ''}`}>
                            {elementAt(8,3)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(8,4)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 8 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(8,5)}
                        </td>
                        <td className={`left-border bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(8,6)}
                        </td>
                        <td className={`bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(8,7)}
                        </td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 8 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(8,8)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Board;