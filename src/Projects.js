import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';


class Projects extends React.Component {

    render() {
        const { bgColor } = this.props;
        return (
            <div className="Page-header" style={{ backgroundColor : bgColor}}>
            <p className="Page-text" style={{color : bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Projects</p>
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