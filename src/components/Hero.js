import React, {Component} from 'react';
import styles from "../css modules/hero.module.css";
import main from "../img/main.jpg";
import {base_url, characters, friends} from "../utils/constants";

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image: '',
            name: 'Luke Skywalker',
            isLoading: true
        }
    }
    componentDidMount() {
        let key = this.props.match.params.hero||this.props.character; //или из строки, или того, кто был в состоянии
        if(!friends.includes(key)) {
            key = 'luke';
        }
        const mainPicture = JSON.parse(sessionStorage.getItem(`${key}_mainPicture`));
        if (mainPicture) {
            this.setState({
                image: mainPicture.image,
                name: mainPicture.name,
                isLoading: false
            });
        } else {
            fetch(characters[key].url)
                .then(response => response.json())
                .then(data => {

                    this.setState({
                        image: data.image,
                        name: data.name,
                        isLoading: false
                    });
                    sessionStorage.setItem(`${key}_mainPicture`,JSON.stringify({
                        image: data.image,
                        name: data.name
                    }))
                })
        }
        this.props.changeHero(key);
    }

    render() {
        if (this.state.isLoading) {
            return 'Loading...';
        } else {
            return (
                <section className="float-left w-25 row mr-2">
                    <img className={`${styles.hero} col`} src={`${base_url}/${this.state.image}`}
                         alt={this.state.name}/>
                </section>
            );
        }
    }
}

export default Hero;