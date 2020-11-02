import React, {Component} from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styles from './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            character: 'luke'
        }
    }

    updateCharacter=(new_character) => {
        this.setState({
            character: new_character
        })
    }

    render() {
        return (

                <div className='container-fluid'>
                    <Header character={this.state.character}/>
                    <Main character={this.state.character} updateCharacter={this.updateCharacter}/>
                    <Footer/>
                </div>

        );
    }
}

export default App;