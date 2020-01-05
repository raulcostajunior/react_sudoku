import React from 'react';

const Board = (props) => {

    return (

        <table style={{ fontSize: 'larger', marginTop: '1em', marginBottom: '1em' }}>
            <tbody>
                <tr>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderLeft: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderTop: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderBottom: '2px solid gray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray' }}>1</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '0.8em', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>9</td>
                </tr>
            </tbody>
        </table>
    )

}

export default Board;