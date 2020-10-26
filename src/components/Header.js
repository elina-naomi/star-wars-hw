import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="fixed-top ml-4 mt-2">
                <ul className="nav">
                    <li className="nav-item btn btn-danger mx-1">Home</li>
                    <li className="nav-item btn btn-danger mx-1">About me</li>
                    <li className="nav-item btn btn-danger mx-1">Star wars</li>
                    <li className="nav-item btn btn-danger mx-1">Contact</li>
                </ul>
            </nav>
            <h1 className="text-center py-3">Luke Skywalker</h1>
        </header>
    );
};

export default Header;