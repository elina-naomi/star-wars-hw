import styles from '../css modules/faragalaxy.module.css';

import React, {Component} from 'react';
import {randomInteger} from "../utils/constants";


class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
        this.firstEpisode = 1;
        this.lastEposode = 6
    }

    componentDidMount() {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if (opening_crawl) {
            this.setState({
                isLoading: false,
                opening_crawl: opening_crawl
            })
        } else {
            fetch(`https://sw-info-api.herokuapp.com/v1/films/${randomInteger(this.firstEpisode,this.lastEposode)}`)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        isLoading: false,
                        opening_crawl: data.opening_crawl
                    });
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                })

        }

    }

    render() {
        const text = this.state.isLoading ? 'Loading...' : this.state.opening_crawl;
        return (
            <p className={styles.farGalaxy}>{text}</p>
        );
    }
}


export default FarGalaxy;