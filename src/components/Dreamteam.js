import React, {Component} from 'react';
import {characters, friends} from "../utils/constants";
import Friend from "./Friend";
import style from '../css modules/dreamteam.module.css'


class Dreamteam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
        }

    }

    componentDidMount() {
        let key = this.props.match.params.hero || this.props.character;
        const friendsImages = JSON.parse(sessionStorage.getItem(`${key}_friends`));
        if (friendsImages) {
            this.setState({
                images: friendsImages,
                isLoading: false
            })
        } else {
            const imagesUrl = [];
            friends.forEach(friend => {
                fetch(characters[friend].url)
                    .then(response => response.json())
                    .then(data => {
                        if (this.props.character !== friend) {
                            imagesUrl.push({
                                image: data.image,
                                name: data.name
                            })
                        }
                        return imagesUrl;
                    })
                    .then(imagesUrl => {
                        this.setState({
                            images: imagesUrl,
                            isLoading: false
                        })
                        sessionStorage.setItem(`${key}_friends`, JSON.stringify(imagesUrl));
                    })
            });
        }


    }

    render() {
        if (this.state.isLoading) {
            return (
                <h2 className="text-center col-12">Loading...</h2>
            );
        } else {
            return (
                <section className={`float-right w-50 row no-gutters ${style.border}`}>
                    <h2 className="text-center col-12">Dream Team</h2>
                    {

                        this.state.images.map((item, index) =>
                            <Friend picture={item.image} sign={item.name} key={index} pos={index + 1}/>
                        )
                    }
                </section>
            );
        }
    }
}

export default Dreamteam;