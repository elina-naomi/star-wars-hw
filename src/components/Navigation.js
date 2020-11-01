import React from 'react';
import {aboutMePage, contactPage, homePage, starWarsPage} from "../utils/constants";
import {ApplContext} from "./utils/Context";

const Navigation = () => {
    return (
        <ApplContext.Consumer>
            {value=> <nav className="fixed-top ml-4 mt-2">
                <div className="nav">
                    {/*<a href={`#/${homePage}`} className="nav-item btn btn-danger mx-1">Home</a>*/}
                    {/*<a href={`#/${aboutMePage}`} className="nav-item btn btn-danger mx-1">About me</a>*/}
                    {/*<a href={`#/${starWarsPage}`} className="nav-item btn btn-danger mx-1">Star wars</a>*/}
                    {/*<a href={`#/${contactPage}`} className="nav-item btn btn-danger mx-1"> Contact</a>*/}

                    <div onClick={()=>{window.history.pushState(value.changePage(homePage),'Home',`#/${homePage}`)}} className="nav-item btn btn-danger mx-1">Home</div>
                    <div onClick={()=>{window.history.pushState(value.changePage(aboutMePage),'About Me',`#/${aboutMePage}`)}} className="nav-item btn btn-danger mx-1">About me</div>
                    <div onClick={()=>{window.history.pushState(value.changePage(starWarsPage),'Star Wars',`#/${starWarsPage}`)}}  className="nav-item btn btn-danger mx-1">Star wars</div>
                    <div onClick={()=>{window.history.pushState(value.changePage(contactPage),'Contact',`#/${contactPage}`)}}  className="nav-item btn btn-danger mx-1">Contact</div>
                </div>
            </nav>}
        </ApplContext.Consumer>

    );
};

export default Navigation;
