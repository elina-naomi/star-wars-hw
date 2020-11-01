import React from 'react';

import main from '../img/main.jpg';
import Hero from "./Hero";
import Dreamteam from "./Dreamteam";
import FarGalaxy from "./FarGalaxy";
import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import Error404 from "./Error404";
import {ApplContext} from "./utils/Context";

const Main = () => {
    function drawPage(activePage) {
        switch (activePage) {
            case aboutMePage:
                return <AboutMe/>;
            case starWarsPage:
                return <StarWars/>
            case contactPage:
                return <Contact/>
            case homePage:
                return <Home/>
            default:
                return <Error404/>
        }
    }

    return (
        <ApplContext.Consumer>
            {value=>drawPage(value.activePage)}
        </ApplContext.Consumer>
    )

};

export default Main;