import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
export const Navbar = () => {

    function openNav() {
        let navbarElement = document.getElementById('navbar');
        if (navbarElement.className === 'navbar') {
            navbarElement.className += ' resposive';
        } else {
            navbarElement.className = 'navbar';
        }
    }
    return (
        <ul className='navbar' id="navbar">
            <li><Link to='/'>Hooks</Link></li>
            <li><Link to='useStateExample'>useState</Link></li>
            <li><Link to='useEffectExample'>useEffect</Link></li>
            <li>useContext</li>
            <li><Link to='useRefExample'>useRef</Link></li>
            <li><Link to='useReducerExample'>useReducer</Link></li>
            <li><Link to='useCallbackExample'>useCallback</Link></li>
            <li><Link to="useMemoExample">useMemo</Link></li>
            <li className="icon" onClick={openNav}>&#9776;</li>
        </ul>
    )
}
