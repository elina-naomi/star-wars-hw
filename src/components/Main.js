import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";

import Home from "./Home";
import AboutMe from "./AboutMe";
import StarWars from "./StarWars";
import Contact from "./Contact";
import Error404 from "./Error404";



const Main = (props) => {


    return (
        <div>
            <Switch>
                <Route path={[`/${aboutMePage}`,`/${aboutMePage}/:hero`]} exact render={routerProps=><AboutMe{...routerProps} changeHero={props.updateCharacter}/>}/>
                <Route path={`/${starWarsPage}`} exact component={StarWars}/>
                <Route path={`/${contactPage}`} exact component={Contact}/>
                <Route path={['/',`/${homePage}`,`/${homePage}/:hero`]} exact render={routerProps=><Home{...routerProps} changeHero={props.updateCharacter} character={props.character}/>}/>
                <Route component={Error404}/>
            </Switch>

        </div>
    );
};

export default Main;