import { useRef, useEffect, useState } from "react";

export default function UseRefComp() {
    const [text, setText] = useState("");
    const count = useRef(0);
    const inputRef = useRef();
    const previousTextState = useRef("");

    useEffect(() => {
        count.current = count.current + 1
    });

    useEffect(() => {
        previousTextState.current = text;
    }, [text]);

    return (
        <div className="centered-container">
            {/*The useRef Hook allows you to persist values between renders.
            It can be used to store a mutable value that does not cause a re-render when updated.*/}
            <input ref={inputRef} type="text" value={text} onChange={(e) => { setText(e.target.value) }} />
            <p>{text}</p>
            <p>{previousTextState.current}</p>
            {/*
            The useRef Hook can also be used to keep track of previous state values.
            This is because we are able to persist useRef values between renders.
            */}
            {/*
            In React, we can add a ref attribute to an element to access it
            directly in the DOM.
            */}
            <button onClick={() => { inputRef.current.focus() }}>Focus Input</button>
            {/*
             If we tried to count how many times our application renders using the useState Hook, we would be caught in an infinite loop since this Hook itself causes a re-render. so useRef make sense here.
            */}
            <p>{`Renders: ${count.current}`}</p>
        </div>);
}