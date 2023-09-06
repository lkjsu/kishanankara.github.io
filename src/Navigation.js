import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from './AKAResume2023.pdf';


function setColor(date) {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#183D3D";
    } else {
        return "#A8DF8E";
    }
}

class Nav extends React.Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky">
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" to="/Container">Experience</NavLink>
                        <a href={Resume} className="nav-item nav-link">Resume</a>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;