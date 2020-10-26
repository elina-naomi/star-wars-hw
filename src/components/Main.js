import React from 'react';

import main from '../img/main.jpg';
import friend1 from '../img/friend1.jpg';
import friend2 from '../img/friend2.jpg';
import friend3 from '../img/friend3.jpg';
import friend4 from '../img/friend4.jpg';
import friend5 from '../img/friend5.jpg';
import friend6 from '../img/friend6.jpg';
import friend7 from '../img/friend7.jpg';
import friend8 from '../img/friend8.jpg';
import friend9 from '../img/friend9.jpg';

const Main = () => {
    return (
        <main className='clearfix'>
            <section className="float-left w-25 row mr-2">
                <img className="hero col" src={main} alt="Luke Skywalker"/>
            </section>
            <section className="float-right w-50 row no-gutters border">
                <h2 className="text-center col-12">Dream Team</h2>
                <img className="col-4 p-1" src={friend1} alt="friend"/>
                <img className="col-4 p-1" src={friend2} alt="friend"/>
                <img className="col-4 p-1" src={friend3} alt="friend"/>
                <img className="col-4 p-1" src={friend4} alt="friend"/>
                <img className="col-4 p-1" src={friend5} alt="friend"/>
                <img className="col-4 p-1" src={friend6} alt="friend"/>
                <img className="col-4 bottomLeft p-1" src={friend7} alt="friend"/>
                <img className="col-4 p-1" src={friend8} alt="friend"/>
                <img className="col-4 bottomRight p-1" src={friend9} alt="friend"/>
            </section>
            <p className="farGalaxy">It is a period of civil war.
                Rebel spaceships, striking
                from a hidden base, have won
                their first victory against
                the evil Galactic Empire.

                During the battle, Rebel
                spies managed to steal secret
                plans to the Empire's
                ultimate weapon, the DEATH
                STAR, an armored space
                station with enough power
                to destroy an entire planet.

                Pursued by the Empire's
                sinister agents, Princess
                Leia races home aboard her
                starship, custodian of the
                stolen plans that can save her
                people and restore
                freedom to the galaxy....</p>
        </main>
    );
};

export default Main;