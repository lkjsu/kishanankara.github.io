import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from './AKAResume2023_latex2.pdf';

function getClassNameForNav() {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "nav-item-theme-dark";
    } else {
        return "nav-item-theme-light";
    }
}


function setColor() {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#053B50";
    } else {
        return "#A8DF8E";
    }
}

function setHoverColor() {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#fff";
    } else {
        return "#A8DF8E";
    }
}

class Nav extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar" style={{backgroundColor: setColor()}}>
                <div  id="navbarNavAltMarkup">
                    <div>
                        <NavLink className={getClassNameForNav()} hover={{backgroundColor: setHoverColor()}} to="/">Home</NavLink>
                        <NavLink className={getClassNameForNav()} hover={{backgroundColor: setHoverColor()}} to="/Experience">Experience</NavLink>
                        <a href="https://github.com/lkjsu?tab=repositories" className={getClassNameForNav()} hover={{backgroundColor: setHoverColor()}}>Projects</a>
                        {/* <NavLink className={getClassNameForNav()} hover={{backgroundColor: setHoverColor()}} to="/Projects">Projects</NavLink> */}
                        <a href={Resume} className={getClassNameForNav()} hover={{backgroundColor: setHoverColor()}}>Resume</a>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;