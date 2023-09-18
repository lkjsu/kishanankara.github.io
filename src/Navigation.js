import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from './AKAResume2023.pdf';

function getClassNameForNav() {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "nav-item-theme-dark";
    } else {
        return "nav-item-theme-light";
    }
}


function setColor() {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#183D3D";
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
                        <a href={Resume} className={getClassNameForNav()}>Resume</a>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;