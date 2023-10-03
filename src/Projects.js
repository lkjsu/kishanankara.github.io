import React from 'react';

function setColor(date) {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#183D3D";
    } else {
        return "#A8DF8E";
    }
}

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: setColor(new Date().toLocaleTimeString('en-GB'))
        };
        this.colors = ['#183D3D','#A8DF8E'];
        this.buttonNames = ['Lights OFF','Lights ON']
    }

    render() {
        return (
        <div className=""></div>
        );
    }
}

export default Projects;