import { useState, useCallback, useRef, useEffect } from "react";
import TodoComp from "./todo";

export default function UseCallbackComp() {
    const [text, setText] = useState("");
    const renders = useRef(0);
    const [num1] = useState(5);
    const [num2] = useState(4);
    const [result, setResult] = useState(0);
    const [todos, setTodos] = useState([]);

    // const sum = useCallback(() => num1 + num2, [num1, num2]);

    const buildArray = useCallback(() => [num1, num2], [num1, num2]);

    useEffect(() => { renders.current++ });

    useEffect(() => {
        console.log("New function created " + buildArray());
        setResult(buildArray());
    }, [buildArray]);

    const addTodos = useCallback(() => { setTodos(prevValue => [...prevValue, "New Value"]) }, []);

    return (
        <section className="centered-container">
            <p>{`Renders : ${renders.current}`}</p>
            <p>{`Result : ${result}`}</p>
            <input type="text" placeholder="Random Input" value={text} onChange={(e) => { setText(e.target.value) }} />

            {/* we use memo and useCallback on addTodos() beacause it passed as prop to TodoComp and it will re-render only when todos state will get changed */}
            <TodoComp todos={todos} addTodos={addTodos} />
        </section>
    );
};