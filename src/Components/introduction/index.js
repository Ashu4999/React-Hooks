import React, { useEffect } from 'react'
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then(res => res.json()).catch(err => console.log(err));

export const Introduction = () => {
    const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/todos", fetcher)

    useEffect(() => {
        data && console.log(data[0])
    }, [data]);

    if (error) return <div>failed to load</div>
    if (isLoading) return <div>loading...</div>
    return <div>hello {data[0].title}</div>
}
