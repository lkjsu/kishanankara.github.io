import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import UB from './logos/Crest_BW.png';
import ND from './logos/ND.png';
import HS from './logos/HS.png';

const UBIcon = () => <img class="vertical-timeline-element-icon" src={UB} alt="UB" width="60px" height="60px" left="50%" top="50%" margin-left="-30px"/>
const NDLogo = () => <img class="vertical-timeline-element-icon" src={ND} alt="UB" width="60px" height="60px" left="50%" top="50%" margin-left="-30px" />
const HSLogo = () => <img class="vertical-timeline-element-icon" src={HS} alt="UB" width="60px" height="60px" left="50%" top="50%" margin-left="-30px" />

class Experience extends React.Component {

    onScrollFunction() {
        window.addEventListener('scroll', () => {
            this.value = document.height;
            console.log(document.height)
        });
    }
    
    handleClick(color) {
        this.setState({bgColor : color});
    }
    
    render() {
        const { bgColor } = this.props;
        return (
            <div className="Page-header" style={{ backgroundColor : bgColor}}>
            <p className="Page-text" style={{color : bgColor === "#183D3D" ? "#EEEEEE" :"#016A70"}}>Experience</p>
            {/* <div>
            {
                this.colors.map((c, index) => 
                <button key={index} style={{backgroundColor: c, color: c === '#183D3D'? "white": "black"}} onClick={() => {this.handleClick(c)}}>{this.buttonNames[index]}</button>)
            }
            </div> */}
            <VerticalTimeline>
                <VerticalTimelineElement 
                    className='work'
                    contentStyle={{ background: '#176B87', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #176B87' }}
                    date="2019-2023"
                    iconStyle={{ background: '#EEEEEE', color: '#EEEEEE'}}
                    icon={<HSLogo />}
                    >
                 <h3 className="title">Software Engineer</h3>
                 <h4 className="subtitle">Palo Alto and Sunnyvale, CA</h4>
                    <ul>
                        <li>designed and implemented an inventory service which allowed assigning devices to customer workloads with 66%
                    reduced network footprint.</li> 
                        <li>added platform support for XAPK distribution which allows submission of apps that are up to 6x larger than the Play
                    Store size limit.</li>
                        <li>researched new techniques to parse Instruments trace file for iOS 13 through 16.</li>
                        <li>enhanced logging capabilities to identify bottlenecks in the CI/CD pipeline that led to performance improvements of
                    up to 30% in the profiler runtime.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="work"
                    contentStyle={{ background: '#176B87', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #176B87' }}
                    date="2018-2018"
                    iconStyle={{ background: '#EEEEEE', color: '#EEEEEE' }}
                    icon={<NDLogo />}
                    >
                    <h3 className="title">Software Engineer Intern</h3>
                    <h4 className="subtitle">New York, NY</h4>
                    <ul>
                        <li>researched and developed a network traffic monitoring service for iOS apps on the platform.</li>
                        <li>reverse engineered Xcode’s Instruments APIs to extract and analyze app performance metrics like Memory Usage,
Network Activity, Disk IO, Call Stack, etc.</li>
                    </ul>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="work"
                    contentStyle={{ background: '#176B87', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #176B87' }}
                    date="2017-2017"
                    iconStyle={{ background: '#EEEEEE', color: '#EEEEEE' }}
                    icon={<UBIcon />}
                    >
                    <h3 className="title">Software Engineer</h3>
                    <h4 className="subtitle">Buffalo, NY</h4>
                    <ul>
                        <li>developed a grading feature to allow more flexibility for the instructor in choosing the final grade across multiple
submissions for an assignment.</li>
                    </ul>
                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        )
    }
}

export default Experience;