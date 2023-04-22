import { useRef, useEffect, useState } from "react";

export default function UseRefComp() {
    const [text, setText] = useState("");
    const count = useRef(0);
    const inputRef = useRef();
    const previousTextState = useRef("");
    const [seconds, setSeconds] = useState(0);
    const timerRef = useRef(null);

    useEffect(() => {
        count.current = count.current + 1
    });

    useEffect(() => {
        previousTextState.current = text;
    }, [text]);

    const startTimer = () => {
        if (timerRef.current == null) {
            timerRef.current = setInterval(() => {
                setSeconds(prevState => prevState + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerRef.current);
        timerRef.current = null;
    };

    const resetTimer = () => {
        stopTimer();
        setSeconds(0);
    };

    return (
        <div className="centered-container">
            {/*The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.*/}
            <input ref={inputRef} type="text" placeholder="Random Input" value={text} onChange={(e) => { setText(e.target.value) }} />

            <p>State : {text}</p>
            <p>Previous State : {previousTextState.current}</p> {/*Note :- if you start timer then seconds state get changed which cause re-render and text state get changed so that ref also updates to latest value of text state*/}
            {/*
            The useRef Hook can also be used to keep track of previous state values.
            This is because we are able to persist useRef values between renders.
            */}

            {/*
             If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. so useRef make sense here.
            */}
            <p>{`Renders: ${count.current}`}</p>
            <section>
                <p>{`Seconds : ${seconds}`}</p>
                <div className="btnGroup">
                    {/*
                    In React, we can add a ref attribute to an element to access it
                    directly in the DOM.
                    */}
                    <button onClick={() => { inputRef.current.focus() }}>Focus Input</button>
                    <button onClick={startTimer}>Start</button>
                    <button onClick={stopTimer}>Stop</button>
                    <button onClick={resetTimer}>Reset</button>
                </div>
            </section>
        </div>);
}