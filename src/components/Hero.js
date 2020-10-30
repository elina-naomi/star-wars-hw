import React from 'react';
import main from "../img/main.jpg";
import styles from '../css modules/hero.module.css'

const Hero = () => {
    return (
        <section className="float-left w-25 row mr-2">
            <img className={`${styles.hero} col`} src={main} alt="Luke Skywalker"/>
        </section>
    );
};

export default Hero;