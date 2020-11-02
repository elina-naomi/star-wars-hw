import React from 'react';
import style from '../css modules/friend.module.css'
import {base_url} from "../utils/constants";

const Friend = (props) => {
    let styles = 'col-4 p-1 ';
    if(props.pos===7) {
        styles+=style.bottomLeft;
    }
    if(props.pos===9) {
        styles+=style.bottomRight;
    }
    return (
        <img className={styles} src={`${base_url}/${props.picture}`}
             alt={props.sign}/>
    );
};
export default Friend;