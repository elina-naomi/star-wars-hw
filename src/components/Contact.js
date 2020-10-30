import React, {Component} from 'react';

import styles from '../css modules/contact.module.css'


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    createOptions(planets) {
        const options = [];
        for (let i = 0; i < planets.length; i++) {
            options.push((<option key={i} value={planets[i]}>{planets[i]}</option>));
        }
        return options;
    }

    componentDidMount() {
        const limit = 30 * 24 * 3600 * 1000; //30 дней

        const planetsInfo = JSON.parse(localStorage.getItem('planetsInfo'));
        if (planetsInfo && (+new Date() - planetsInfo.creationDate < limit)) {
            this.setState({
                isLoading: false,
                planetsInfo: planetsInfo
            })
        } else {
            fetch('https://sw-info-api.herokuapp.com/v1/planets')
                .then(response => response.json())
                .then(data => {
                    const planets = [];
                    for (let i = 0; i < data.length; i++) {
                        planets.push(data[i].name);
                    }

                    const planetsInfo = {
                        planets: planets,
                        creationDate: +new Date()
                    }
                    console.log(planetsInfo);

                    this.setState({
                        isLoading: false,
                        planetsInfo: planetsInfo

                    });
                    localStorage.setItem('planetsInfo', JSON.stringify(planetsInfo));
                })
        }
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div>Loading...</div>
            );
        } else {
            return (
                <div>
                    <div className={styles.container}>
                        <form>

                            <label htmlFor="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                            <label htmlFor="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                            <label htmlFor="country">Country</label>
                            <select id="country" name="country">
                                {this.createOptions(this.state.planetsInfo.planets)}
                            </select>

                            <label htmlFor="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Write something.."/>

                            <input type="submit" value="Submit"/>

                        </form>
                    </div>
                </div>
            );
        }
    }
}

export default Contact;