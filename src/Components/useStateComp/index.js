import React, { useState } from 'react'

export const UseStateComp = () => {
    const [user, setUser] = useState({ name: "", profession: "" })
    return (
        <form>
            <input type='text' value={user.name} onChange={(e) => { setUser(...user, user.name = e.target.value) }} /><br />
            <button onClick="greet">Submit</button>
        </form>
    )
}
