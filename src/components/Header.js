import React from 'react';
import Navigation from "./Navigation";
import {characters} from "../utils/constants";

const Header = (props) => {
    return (
            <header>
                <Navigation hero={props.character}/>
                <h1 className="text-center py-3">{characters[props.character].name}</h1>
            </header>

    );
};

export default Header;