import './App.css';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {homePage} from "./utils/constants";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: homePage
        }
    }

    changeActivePage = (page) => {
        this.setState({
            activePage: page
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <Header changePage={this.changeActivePage}/>
                <Main page={this.state.activePage}/>
                <Footer/>
            </div>
        );
    }
}

export default App;
