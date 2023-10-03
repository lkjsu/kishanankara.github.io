import React from 'react';

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

    }
}

export default Projects;