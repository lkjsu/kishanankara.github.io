import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import UB from './logos/Crest_BW.png';
import ND from './logos/ND.png';
import HS from './logos/HS.png';

const UBIcon = () => <img class="circular--square" src={UB} alt="UB" width="60px" height="60px" left="50%" top="50%" margin-left="-30px"/>
const NDLogo = () => <img class="circular--square" src={ND} alt="UB" width="60px" height="60px" left="50%" top="50%" margin-left="-30px" />
const HSLogo = () => <img class="circular--square" src={HS} alt="UB" width="60px" height="60px" left="50%" top="50%" margin-left="-30px" />

function setColor(date) {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#183D3D";
    } else {
        return "#A8DF8E";
    }
}

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bgColor: setColor(new Date().toLocaleTimeString('en-GB'))
        };
        this.colors = ['#183D3D','#A8DF8E'];
        this.buttonNames = ['Lights OFF','Lights ON']
    }

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
        return (
            <div className="Page-header" style={{ backgroundColor : this.state.bgColor}}>
            <p className="Page-text" style={{color : this.state.bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Experience</p>
            {/* <div>
            {
                this.colors.map((c, index) => 
                <button key={index} style={{backgroundColor: c, color: c === '#183D3D'? "white": "black"}} onClick={() => {this.handleClick(c)}}>{this.buttonNames[index]}</button>)
            }
            </div> */}
            <VerticalTimeline>
                <VerticalTimelineElement 
                    className='work'
                    contentStyle={{ background: '#016A70', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #016A70' }}
                    date="2019-2023"
                    iconStyle={{ background: '#EEEEEE', color: '#EEEEEE'}}
                    icon={<HSLogo />}
                    >
                 <h3 className="title">Software Engineer</h3>
                 <h4 className="subtitle">Palo Alto and Sunnyvale, CA</h4>
                    <p>
                    • designed and implemented an inventory service which allowed assigning devices to customer workloads with 66%
                reduced network footprint.
                    </p>
                    <p>
                    • added platform support for XAPK distribution which allows submission of apps that are up to 6x larger than the Play
                Store size limit.
                    </p>
                    <p>
                    • researched new techniques to parse Instruments trace file for iOS 13 through 16.
                    </p>
                    <p>
                    • enhanced logging capabilities to identify bottlenecks in the CI/CD pipeline that led to performance improvements of
                up to 30% in the profiler runtime.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="work"
                    contentStyle={{ background: '#016A70', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #016A70' }}
                    date="2018-2018"
                    iconStyle={{ background: '#EEEEEE', color: '#EEEEEE' }}
                    icon={<NDLogo />}
                >
                    <h3 className="title">Software Engineer Intern</h3>
                    <h4 className="subtitle">New York, NY</h4>
                    <p>
                    • researched and developed a network traffic monitoring service for iOS apps on the platform.
                    </p>
                    <p>
                    • reverse engineered Xcode’s Instruments APIs to extract and analyze app performance metrics like Memory Usage,
Network Activity, Disk IO, Call Stack, etc.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="work"
                    contentStyle={{ background: '#016A70', color: '#EEEEEE' }}
                    contentArrowStyle={{ borderRight: '7px solid  #016A70' }}
                    date="2017-2017"
                    iconStyle={{ background: '#EEEEEE', color: '#EEEEEE' }}
                    icon={<UBIcon />}
                >
                    <h3 className="title">Software Engineer</h3>
                    <h4 className="subtitle">Buffalo, NY</h4>
                    <p>
                    • developed a grading feature to allow more flexibility for the instructor in choosing the final grade across multiple
submissions for an assignment.
                    </p>

                </VerticalTimelineElement>
            </VerticalTimeline>
            </div>
        )
    }
}

export default Container;