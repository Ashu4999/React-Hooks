import { useEffect, useRef, memo } from "react";

function TodoComp({ todos, addTodos }) {
    const renders = useRef(0);

    useEffect(() => { renders.current++ });
    return (
        <section>
            <h3>Todo component below</h3>
            <p>{`Renders : ${renders.current}`}</p>
            <button onClick={addTodos}>Add todo</button>
            {todos.map((item, index) => <p key={index}>{item}</p>)}
        </section>
    );
};


export default memo(TodoComp);