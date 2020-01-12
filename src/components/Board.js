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
                            {elementAt(1, 0)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 0 && props.board.focusCol === 4 ? 'focused' : ''}`}>
                            {elementAt(1, 1)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 0 && props.board.focusCol === 5 ? 'focused' : ''}`}>
                            {elementAt(1, 2)}
                        </td>
                        <td className={`left-border top-border ${props.board.focusRow === 0 && props.board.focusCol === 6 ? 'focused' : ''}`}>
                            {elementAt(2,0)}
                        </td>
                        <td className={`top-border ${props.board.focusRow === 0 && props.board.focusCol === 7 ? 'focused' : ''}`}>
                            {elementAt(2,1)}
                        </td>
                        <td className={`top-border right-border ${props.board.focusRow === 0 && props.board.focusCol === 8 ? 'focused' : ''}`}>
                            {elementAt(2,2)}
                        </td>
                    </tr>
                    <tr>
                        <td className={`left-border ${props.board.focusRow === 1 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`${props.board.focusRow === 1 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`right-border ${props.board.focusRow === 1 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`left-border ${props.board.focusRow === 1 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`${props.board.focusRow === 1 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`right-border ${props.board.focusRow === 1 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border ${props.board.focusRow === 1 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`${props.board.focusRow === 1 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`right-border ${props.board.focusRow === 1 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                    <tr>
                        <td className={`left-border bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 2 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`bottom-border left-border ${props.board.focusRow === 2 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 2 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`bottom-border ${props.board.focusRow === 2 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 2 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                    <tr>
                        <td className={`left-border top-border ${props.board.focusRow === 3 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`top-border ${props.board.focusRow === 3 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`top-border right-border ${props.board.focusRow === 3 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`top-border left-border ${props.board.focusRow === 3 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`top-border ${props.board.focusRow === 3 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`top-border right-border ${props.board.focusRow === 3 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border top-border ${props.board.focusRow === 3 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`top-border ${props.board.focusRow === 3 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`top-border right-border ${props.board.focusRow === 3 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                    <tr>
                        <td className={`left-border ${props.board.focusRow === 4 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`${props.board.focusRow === 4 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`right-border ${props.board.focusRow === 4 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`left-border ${props.board.focusRow === 4 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`${props.board.focusRow === 4 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`right-border ${props.board.focusRow === 4 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border ${props.board.focusRow === 4 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`${props.board.focusRow === 4 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`right-border ${props.board.focusRow === 4 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                    <tr>
                        <td className={`left-border bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 5 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`bottom-border left-border ${props.board.focusRow === 5 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 5 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`bottom-border ${props.board.focusRow === 5 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 5 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                    <tr>
                        <td className={`left-border top-border ${props.board.focusRow === 6 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`top-border ${props.board.focusRow === 6 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`top-border right-border ${props.board.focusRow === 6 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`top-border left-border ${props.board.focusRow === 6 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`top-border ${props.board.focusRow === 6 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`top-border right-border ${props.board.focusRow === 6 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border top-border ${props.board.focusRow === 6 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`top-border ${props.board.focusRow === 6 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`top-border right-border ${props.board.focusRow === 6 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                    <tr>
                        <td className={`left-border ${props.board.focusRow === 7 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`${props.board.focusRow === 7 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`right-border ${props.board.focusRow === 7 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`left-border ${props.board.focusRow === 7 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`${props.board.focusRow === 7 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`right-border ${props.board.focusRow === 7 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border ${props.board.focusRow === 7 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`${props.board.focusRow === 7 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`right-border ${props.board.focusRow === 7 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                    <tr>
                        <td className={`left-border bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 0 ? 'focused' : ''}`}>1</td>
                        <td className={`bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 1 ? 'focused' : ''}`}>2</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 8 && props.board.focusCol === 2 ? 'focused' : ''}`}>3</td>
                        <td className={`bottom-border left-border ${props.board.focusRow === 8 && props.board.focusCol === 3 ? 'focused' : ''}`}>4</td>
                        <td className={`bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 4 ? 'focused' : ''}`}>5</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 8 && props.board.focusCol === 5 ? 'focused' : ''}`}>6</td>
                        <td className={`left-border bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 6 ? 'focused' : ''}`}>7</td>
                        <td className={`bottom-border ${props.board.focusRow === 8 && props.board.focusCol === 7 ? 'focused' : ''}`}>8</td>
                        <td className={`bottom-border right-border ${props.board.focusRow === 8 && props.board.focusCol === 8 ? 'focused' : ''}`}>9</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default Board;