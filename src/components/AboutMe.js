import React, {Component} from 'react';

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        const limit = 30 * 24 * 3600 * 1000; //30 дней
        const heroInfo = JSON.parse(localStorage.getItem('hero_info'));
        if(heroInfo && (+new Date() - heroInfo.creationDate < limit)){
            this.setState({
                isLoading: false,
                heroInfo: heroInfo
            })
        }else {
            fetch('https://sw-info-api.herokuapp.com/v1/peoples/1')
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
                    localStorage.setItem('hero_info',JSON.stringify(heroInfo));
                })
        }
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