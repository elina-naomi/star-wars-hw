import React, {Component} from 'react';
import {characters, friends} from "../utils/constants";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {

       let key = this.props.match.params.hero||'luke';
        if(!friends.includes(key)) {
            key = 'luke';
        }
        const limit = 30 * 24 * 3600 * 1000; //30 дней
        const heroInfo = JSON.parse(localStorage.getItem(`${key}Info`));
        if(heroInfo && (+new Date() - heroInfo.creationDate < limit)){
            this.setState({
                isLoading: false,
                heroInfo: heroInfo
            })
        }else {
            fetch(characters[key].url)
                .then(response => response.json())
                .then(data => {
                    const heroInfo = {
                        name: data.name,
                        height: data.height,
                        birth_year: data.birth_year,
                        gender: data.gender,
                        mass: data.mass,
                        hair_color: data.hair_color,
                        skin_color: data.skin_color,
                        eye_color: data.eye_color,
                        creationDate: +new Date()
                    }
                    this.setState({
                        isLoading: false,
                        heroInfo: heroInfo
                    });
                    localStorage.setItem(`${key}Info`,JSON.stringify(heroInfo));
                })
        }
        this.props.changeHero(key);
    }

    render() {
       if(this.state.isLoading) {
           return(
               <div>Loading...</div>
           );
       } else {
           return (
               <div>
                   <p>name: {this.state.heroInfo.name}</p>
                   <p>height: {this.state.heroInfo.height}</p>
                   <p>birth year: {this.state.heroInfo.birth_year}</p>
                   <p>gender: {this.state.heroInfo.gender}</p>
                   <p>mass: {this.state.heroInfo.mass}</p>
                   <p>hair color: {this.state.heroInfo.hair_color}</p>
                   <p>skin color: {this.state.heroInfo.skin_color}</p>
                   <p>eye color: {this.state.heroInfo.eye_color}</p>
               </div>
           );
       }


    }
}

export default AboutMe;