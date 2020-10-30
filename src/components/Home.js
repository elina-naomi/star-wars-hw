import React from 'react';
import main from "../img/main.jpg";
import Hero from "./Hero";
import Dreamteam from "./Dreamteam";
import FarGalaxy from "./FarGalaxy";

const Home = () => {
    return (
        <main className='clearfix'>
            <Hero/>
            <Dreamteam/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;