import { useState, useMemo, useEffect, useCallback } from "react";

const buildArray = () => {
    for (let i = 0; i < 1000000000; i++) {
        //do something
    }
    return ["an example of extensive function"];
};

export default function UseMemoComp() {
    const [numberForFibonacci, setNumberForFibonacci] = useState(0);
    const [randomInput, setRandomInput] = useState("");

    const fibCalculation = useCallback((n) => {
        return (n <= 1) ? n : fibCalculation(n - 1) + fibCalculation(n - 2);
    }, []);

    const fibNumber = useMemo(() => fibCalculation(numberForFibonacci), [numberForFibonacci, fibCalculation]);

    const newArray = useMemo(() => buildArray(), []);

    useEffect(() => {
        console.log("New Fibonacci Array");
    }, [newArray]);

    // Note: - useEffect remembers primitive values so it will not execute until 
    // fibNumber return new value 
    // but it doesn't remember not primitive like array, object and function so will 
    // execute on each render

    return (
        <div className="centered-container">
            <p>Fibonacci Sequence:</p>
            <input type="text"
                className="input-field"
                value={numberForFibonacci}
                onChange={(e) => setNumberForFibonacci(e.target.value)}
            />
            <p>{`Number : ${fibNumber || '--'}`}</p>

            <br />

            <p>Random input:</p>
            <input
                type="text"
                className="input-field"
                value={randomInput}
                onChange={(e) => { setRandomInput(e.target.value) }}
            />
        </div>
    );
}