import React, { useState } from 'react'
import '../components/navbar.css';

function Navbar() {
    const [active, setActive] = useState('nav-menu')
    const [toggleIcon, setToggleIcon] = useState("nav-toggler")

    const navToggle = () => {
        active === 'nav-menu'
            ? setActive('nav-menu nav-active')
            : setActive('nav-menu')

            // TogglerIcon

            toggleIcon === 'nav-toggler'
            ? setToggleIcon('nav-toggler toggle')
            : setToggleIcon('nav-toggler');
    }


    return (
        <nav className='nav'>

            {/* <div onClick={navToggles} className="nav-toggler"> */}
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className={active}>
                <li className="nav-item">
                    <a href="#" className="nav-link">בית</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">עלינו</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">עוד פרטים</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link">יצירת קשר</a>
                </li>
            </ul>
            <a href="#" className="nav-brand">Bria</a>


        </nav>
    )
}

export default Navbar

// https://www.youtube.com/watch?v=ZJZVCg2lXSc