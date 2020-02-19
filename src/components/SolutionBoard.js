import React from 'react';

const SolutionBoard = (props) => {

    // TODO: react to properties 'board' and 'readOnlyPositions'

    return (
        <table style={{ fontSize: 'smaller', marginTop: '1em', marginBottom: '1em' }}>
            <tbody>
                <tr>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderTop: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderRight: '2px solid gray', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderRight: '2px solid gray', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>9</td>
                </tr>
                <tr style={{ border: '1px solid lightGray' }}>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderLeft: '2px solid gray', borderBottom: '2px solid gray', paddingTop: '1px', paddingBottom: '1px' }}>1</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>2</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>3</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>4</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>5</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>6</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>7</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>8</td>
                    <td style={{ padding: '8px', margin: '0', textAlign: 'center', border: '1px solid lightGray', borderRight: '2px solid gray', paddingTop: '1px', borderBottom: '2px solid gray', paddingBottom: '1px' }}>9</td>
                </tr>
            </tbody>
        </table>
    )

}

export default SolutionBoard;