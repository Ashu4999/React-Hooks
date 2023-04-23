import React, { useEffect } from 'react'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json()).catch(err => console.log(err));

export const Introduction = () => {
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher)

    useEffect(() => {
        data && console.log(data[0])
    }, [data]);

    return (
        <div className='centered-container'>
            {
                error ? <div>failed to load</div> :
                    isLoading ? <div>loading...</div> :
                        <div>{`Simple react project to undestand hooks of react`}</div>}
        </div>
    );
}
