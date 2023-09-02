import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import UB from './logos/UB.png';
import ND from './logos/ND.png';
import HS from './logos/HS.png';

const UBIcon = () => <img class="circular--square" src={UB} height="55px" width="70px" />
const NDLogo = () => <img class="circular--square" src={ND} height="55px" width="70px" />
const HSLogo = () => <img class="circular--square" src={HS} height="55px" width="70px" />

class Container extends React.Component {

    constructor(props) {
        super(props);
    }

    onScrollFunction() {
        window.addEventListener('scroll', () => {
            this.value = document.height;
            console.log(document.height)
        });
    }
    
    render() {
        return (
            <VerticalTimeline>
                <VerticalTimelineElement 
                    className='vertical-timeline-element--work'
                    contentStyle={{ background: '#241468', color: '#EA1179' }}
                    contentArrowStyle={{ borderRight: '7px solid  #241468' }}
                    date="2019-2023"
                    iconStyle={{ background: '#fff', color: '#F79BD3'}}
                    icon={<HSLogo />}
                    >
                 <h3 className="vertical-timeline-element-title">Software Engineer</h3>
                 <h4 className="vertical-timeline-element-subtitle">Palo Alto and Sunnyvale, CA</h4>
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
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#512B81', color: '#EA1179' }}
                    contentArrowStyle={{ borderRight: '7px solid  #241468' }}
                    date="2018-2018"
                    iconStyle={{ background: '#fff', color: '#F79BD3' }}
                    icon={<NDLogo />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
                    <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
                    <p>
                    • researched and developed a network traffic monitoring service for iOS apps on the platform.
                    </p>
                    <p>
                    • reverse engineered Xcode’s Instruments APIs to extract and analyze app performance metrics like Memory Usage,
Network Activity, Disk IO, Call Stack, etc.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement 
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#512B81', color: '#EA1179' }}
                    contentArrowStyle={{ borderRight: '7px solid  #241468' }}
                    date="2017-2017"
                    iconStyle={{ background: '#fff', color: '#F79BD3' }}
                    icon={<UBIcon />}
                >
                    <h2 className="employer"></h2>
                    <h3 className="title">Software Engineer</h3>
                    <h4 className="subtitle">Buffalo, NY</h4>
                    <p>
                    • developed a grading feature to allow more flexibility for the instructor in choosing the final grade across multiple
submissions for an assignment.
                    </p>

                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }
}

export default Container;