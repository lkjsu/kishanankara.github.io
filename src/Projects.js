import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';

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
            <div className="Page-header" style={{ backgroundColor : this.state.bgColor}}>
            <p className="Page-text" style={{color : this.state.bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Projects</p>
            <VerticalTimelineElement
                className='project'
                contentStyle={{ background: '#016A70', color: '#EEEEEE' }}
                contentArrowStyle={{ borderRight: '7px solid  #016A70' }}
                iconStyle={{ background: '#EEEEEE', color: '#EEEEEE'}}>
                <a href='https://github.com/lkjsu/cli_chat' className='title' >cliChat</a>

                </VerticalTimelineElement>
            </div>
        );
    }
}

export default Projects;