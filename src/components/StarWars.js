import React from 'react';
import {starWarsInfo} from "../utils/constants";
import styles from '../css modules/faragalaxy.module.css';

const StarWars = () => {
    return (
        <div className={styles.farGalaxy}>
            {starWarsInfo}
        </div>
    );
};

export default StarWars;