import React from "react";
import Link from 'next/link';

const Navbar = () => {
    return (
    <nav className="flex flex-row w-screen">
        <ul className="flex flex-row">
            <Link className="my-8 mr-8" href='/'><li>Home</li></Link>
            <Link className="my-8 mr-8" href='/resume'> <li>Resume</li></Link>
            <Link className="my-8 mr-8" href='/contact'> <li>Contact</li></Link>
        </ul>
        
    </nav>
    )
}

export default Navbar;