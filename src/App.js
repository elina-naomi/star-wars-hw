import './App.css';
import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {homePage} from "./utils/constants";
import {ApplContext} from "./components/utils/Context";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activePage: window.location.hash.substring(2)
        }
    }

    changeActivePage = (page) => {
        this.setState({
            activePage: page
        })
    }

    componentDidMount() {
        window.addEventListener('hashchange',()=>{
            this.changeActivePage(window.location.hash.substring(2)); // начиная со 2го символа пропуская решентку и слеш
        })
    }

    render() {
        return (
            <div className='container-fluid'>
                <ApplContext.Provider value={{
                    changePage: this.changeActivePage,
                    activePage: this.state.activePage
                }}>
                    <Header/>
                    <Main/>
                </ApplContext.Provider>
                <Footer/>
            </div>
        );
    }
}

export default App;
