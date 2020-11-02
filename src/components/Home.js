import React, {Component} from 'react';
import main from "../img/main.jpg";
import Hero from "./Hero";
import Dreamteam from "./Dreamteam";
import FarGalaxy from "./FarGalaxy";
import {friends} from "../utils/constants";

class Home extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <main className='clearfix'>
                <Hero character={this.props.character} match={this.props.match} changeHero={this.props.changeHero}/>
                <Dreamteam character={this.props.character} match={this.props.match}/>
                <FarGalaxy/>
            </main>
        );
    }
}

export default Home;