import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, count: state.count += 1 };
        case 'decrement':
            return { ...state, count: state.count -= 1 };
        case 'changeText':
            return { ...state, text: action.payload };
        case 'changeColor':
            return { ...state, randomColor: action.payload };
        default:
            throw new Error();
    }
}

export default function UseReducerComp() {
    const [state, dispatch] = useReducer(reducer, { count: 0, text: "", randomColor: "#000" });

    function generateRandomColor() {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }
    return (
        <section className='centered-container'>
            <div className='column-field-container'>
                <p className='text-font' style={{ color: state.randomColor }}>Type test below :</p>
                <input className='input-field' style={{ color: state.randomColor }} type="text" value={state.text} onChange={(e) => dispatch({ type: "changeText", payload: e.target.value })} />
                <div style={{ color: state.randomColor, fontSize: "35px", fontWeight: 700 }}>{state.count}</div>
                <div className='btnGroup'>
                    <button onClick={() => dispatch({ type: "increment" })}>+</button>
                    <button onClick={() => dispatch({ type: "decrement" })}>-</button>
                    <button onClick={() => dispatch({ type: "changeColor", payload: generateRandomColor() })}>Change Color</button>
                </div>
                <p className='text-font' style={{ color: state.randomColor }}>{state.text}</p>
            </div>
        </section>
    )
};
