import React from 'react';
import { NavLink } from 'react-router-dom';
import Resume from './AdityaKA24.pdf';

class Nav extends React.Component {

    render() {
        const { bgColor, hoverColor, className } = this.props;
        return (
            <div>
                <nav className="navbar" style={{backgroundColor: bgColor}}>
                <div  id="navbarNavAltMarkup">
                    <div>
                        <NavLink className={className} hover={{backgroundColor: hoverColor}} to="/">Home</NavLink>
                        <NavLink className={className} hover={{backgroundColor: hoverColor}} to="/Experience">Experience</NavLink>
                        <a href="https://github.com/lkjsu?tab=repositories" className={className} hover={{backgroundColor: hoverColor}}>Projects</a>
                        {/* <NavLink className={getClassNameForNav()} hover={{backgroundColor: setHoverColor()}} to="/Projects">Projects</NavLink> */}
                        <a href={Resume} className={className} hover={{backgroundColor: hoverColor}}>Resume</a>
                    </div>
                </div>
                </nav>
            </div>
        );
    }
}

export default Nav;