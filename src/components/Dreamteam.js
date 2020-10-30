import React from 'react';
import {friends} from '../utils/constants'
import Friend from "./Friend";

const Dreamteam = () => {
    return (
        <section className="float-right w-50 row no-gutters border">
            <h2 className="text-center col-12">Dream Team</h2>
            {friends.map((item, index)=> <Friend picture={item} key={index} pos={index + 1}/> )}
        </section>
    );
};

export default Dreamteam;