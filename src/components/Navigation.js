import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {Link} from 'react-router-dom';

const Navigation = (props) => {

    return (
        <nav className="fixed-top ml-4 mt-2">
            <ul className="nav">
                <Link to={`/${homePage}/${props.hero}`} className="nav-item btn btn-danger mx-1">Home</Link>
                <Link to={`/${aboutMePage}/${props.hero}`} className="nav-item btn btn-danger mx-1">About me</Link>
                <Link to={`/${starWarsPage}`} className="nav-item btn btn-danger mx-1">Star wars</Link>
                <Link to={`/${contactPage}`} className="nav-item btn btn-danger mx-1">Contact</Link>
            </ul>
        </nav>
    );
};

export default Navigation;