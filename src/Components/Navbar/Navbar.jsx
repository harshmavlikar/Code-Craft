import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from "../../assets/logo.png";
import { Link } from 'react-scroll';
import menu_icon from "../../assets/menu_icon.png";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 180 ? setSticky(true) : setSticky(false);
        });
    }, []);

    const toggleMenu = () => {
        setMobileMenu(prevState => !prevState);
    };

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={logo} alt="Logo" className="logo" />
            <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
                <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
                <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
                <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
                <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonial</Link></li>
                <li><Link to='contact' smooth={true} offset={-260} duration={500} className="btn">Contact us</Link></li>
            </ul>
            <img src={menu_icon} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
        </nav>
    );
};

export default Navbar;
