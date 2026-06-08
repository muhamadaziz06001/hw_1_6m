import React from 'react';

const Btn = ({ increment, decrement, reset, increment5, decrement5 }) => {
    return (
        <div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment5}>+5</button>
            <button onClick={decrement5}>-5</button>
        </div>
    );
}

export default Btn;