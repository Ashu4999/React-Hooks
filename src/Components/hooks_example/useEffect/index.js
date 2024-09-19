import React, { useEffect, useReducer } from 'react';

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


    useEffect(() => {
        const handleTabClose = (event) => {
            // const url = 'http://localhost:4500/test';

            // const formData = new FormData();
            // formData.append('message', 'User closed the tab');
            // formData.append('timestamp', new Date().toISOString());

            // // Use navigator.sendBeacon for a reliable API call during page unload
            // navigator.sendBeacon(url, formData);

            // API endpoint URL
            const url = 'https://fakestoreapi.com/products';

            const data = JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            );
            navigator.sendBeacon(url, data);

            // Prevent the default unload behavior if necessary
            // event.preventDefault();  
            event.returnValue = ''; // Required for displaying a confirmation dialog in some browsers
        };

        window.addEventListener('beforeunload', handleTabClose);

        return () => {
            window.removeEventListener('beforeunload', handleTabClose);
        };
    }, []);

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
