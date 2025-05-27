import { useState } from 'react'
import logo from '../images/little_lemon_logo.png'
import menuLogo from '../images/hm_final.png'
import menuOut from '../images/hm_out.png'
import { Link } from 'react-router-dom'


const Nav = () => {
    const [menu , setMenu] = useState(false)
    const ToggleMenu = () => {
        setMenu(!menu)
    }

    return (
        
        <nav className="nav full">
            {/* Mobile navbar */}
            <a className='logo-text mobile' href='/'>
                <p>Little</p>
                <img className="logo" src={logo} alt="logo" />
                <p>Lemon</p>
            </a>
            {!menu && <img className="hm" src={menuLogo} alt='menu icon' onClick={ToggleMenu}/>}
            {menu && <img className="hm out" src={menuOut} alt='hm out icon' onClick={ToggleMenu}/>}
            {menu && <ul className='nav-items mobile'>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <Link to="/bookingpage"><a href='/'>Booking Page</a></Link>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Account</a>
                </li>
            </ul>}


            <ul className='nav-items'>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <Link to="/bookingpage"><a href='/'>Booking Page</a></Link>

                </li>
            </ul>
            <a className='logo-text' href='/'>
                <p>Little</p>
                <img className="logo" src={logo} alt="logo" />
                <p>Lemon</p>
            </a>
            <ul className='nav-items'>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Account</a>
                </li>
            </ul>



        </nav>
    )
}

export default Nav;