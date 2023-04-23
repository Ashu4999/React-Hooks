import React, { useEffect, useState } from 'react'

export default function UseStateComp() {
    const [user, setUser] = useState({ firstName: '', lastName: '', email: '', phone: '', gender: '', address: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const changeUserDetails = (event) => {
        setUser({ ...user, [event.target.id]: event.target.value })
    };

    useEffect(() => {
        let radioBtns = document.getElementsByName('gender');
        radioBtns.forEach((input) => {
            input.addEventListener('change', function () {
                setUser(prevState => { return { ...prevState, gender: input.value } })
            });
        });
    }, []);

    return (
        <div className='centered-container'>
            <form style={{ margin: 10, textAlign: "left" }} onSubmit={(e) => { e.preventDefault(); setFormSubmitted(true); }}>
                <table style={{ display: "flex", justifyContent: "center" }}>
                    <tbody>
                        <tr>
                            <td><label htmlFor='firstName'>First Name</label></td>
                            <td><input type='text' className="form-input" id='firstName' value={user.firstName} onChange={(e) => { changeUserDetails(e) }} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='lastName'>Last Name</label></td>
                            <td><input type='text' className="form-input" id='email' value={user.email} onChange={(e) => { changeUserDetails(e) }} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='email'>Email ID</label></td>
                            <td><input type='text' className="form-input" id='lastName' value={user.lastName} onChange={(e) => { changeUserDetails(e) }} required /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor='phone'>Phone</label></td>
                            <td><input type='text' className="form-input" id='phone' value={user.phone} onChange={(e) => { changeUserDetails(e) }} required /></td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input type='radio' id='male' name='gender' value='male' required />
                                <label htmlFor='male'>Male</label>

                                <input type='radio' id='female' name='gender' value='female' required />
                                <label htmlFor='female'>Female</label>

                                <input type='radio' id='other' name='gender' value='other' required />
                                <label htmlFor='other'>Other</label>
                            </td>
                        </tr>
                        <tr>
                            <td><label htmlFor='address'>Address</label></td>
                            <td><textarea id='address' className="form-input" rows='4' value={user.address} onChange={(e) => { changeUserDetails(e) }} required /></td>
                        </tr>
                        <tr>
                            <td><button type='submit'>Submit</button></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    {formSubmitted && <pre className='displat-json'>{JSON.stringify(user, null, 2)}</pre>}
                </p>
            </form>
        </div >
    )
}
