import React, { useEffect, useReducer } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "withNoDependency":
            return { ...state, withNoDependency: state.withNoDependency + 1 };
        case "withDependency":
            return { ...state, withDependency: state.withDependency + 1 };
        case "withEmptySquareBrackets":
            return { ...state, withEmptySquareBrackets: state.withEmptySquareBrackets + 1 };
        case "changeDependency":
            return { ...state, dependecy: !state.dependecy };
        default:
            throw new Error();
    }
};
export default function UseEffectComp() {
    const [state, dispatch] = useReducer(reducer, { withNoDependency: 0, withEmptySquareBrackets: 0, withDependency: 0, dependecy: true })

    useEffect(() => {
        dispatch({ type: "withNoDependency" });
    });

    useEffect(() => {
        dispatch({ type: "withEmptySquareBrackets" });
    }, []);

    useEffect(() => {
        dispatch({ type: "withDependency" });
    }, [state.dependecy]);

    return (
        <div className='centered-container'>
            <h1>useEffectExample</h1>
            <p>useEffect with no dependecy :{state.withNoDependency}</p>
            <p>useEffect with empty branckets : {state.withEmptySquareBrackets}</p>
            <p>useEffect with dependecy : {state.withDependency}</p>
            <button onClick={() => { dispatch({ type: "changeDependency" }) }}>Change dependecy</button>
        </div>
    )
}
