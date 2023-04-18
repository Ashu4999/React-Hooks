import React, { useState } from 'react'
import { CompB } from './CompB'

export const CompA = () => {
    const [user, setUser] = useState({ name: "ABCD", age: 23 });
    return (
        <>
            <h1>Hey From A</h1>
            <CompB />
        </>
    )
}
