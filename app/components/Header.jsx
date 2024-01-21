import React from 'react';
import Link from 'next/link';
import '../Header.css';

const Header = () => {
    return (
        <header className="bg-transparent text-black py-4 header-animation">
            <div className="max-w-9xl mx-auto flex justify-between items-center px-6 sm:px-6">
                <h1 className="text-1xl sm:text-2xl lg:text-3xl font-bold text-[#a41c44]">
                    bandrasterarmaturen.nl
                </h1>
                <nav>
                    <ul className="flex space-x-10">
                        <li className="nav-item">
                            {/* Use Link without nested <a> tag */}
                            <Link href="/">
                                <span className="nav-link">home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/projecten">
                                <span className="nav-link">projecten</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            {/* External links can still use <a> tags directly */}
                            <a href="http://metalmek.nl/over-ons" className="nav-link">over ons</a>
                        </li>
                        <li className="nav-item">
                            <a href="http://metalmek.nl/contact" className="nav-link">contact</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
