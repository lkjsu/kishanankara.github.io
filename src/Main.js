import './App.css';
import React from 'react';

function setColor() {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#053B50";
    } else {
        return "#A8DF8E";
    }
}

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: setColor()
        };
        this.colors = ['#183D3D','#A8DF8E'];
        this.buttonNames = ['Lights OFF','Lights ON']
    }

    componentDidMount() {
    }

    handleClick(color) {
        this.setState({bgColor : color});
    }

    render() {
    return (
            <div className="App-header" style={{ backgroundColor : this.state.bgColor}}>
                <div className="intro" style={{ backgroundColor : this.state.bgColor}}>
                    <div className="fade-in-text1" style={{color : this.state.bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>Hello, </div>
                    <div className="fade-in-text2" style={{color : this.state.bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>I </div>
                    <div className="fade-in-text3" style={{color : this.state.bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>am</div>
                </div>
                <div className="fade-in-text4" style={{color : this.state.bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>Aditya Kishan Ankaraboyana</div>
                <div class="fade-in-text5" style={{color : this.state.bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>software engineer with a keen interest in Backend Development.</div>
            </div>
            );
        }
    }
            // {/* <div class="u" style={{color : this.state.bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Ankaraboyana</div> */}
            // {/* </div> */}
            // {/* <p1></p1> */}
            // {/* <div class="letter-image">
            // <div class="animated-mail">
            //     <div class="back-fold"></div>
            //     <div class="letter">
            //     <div class="letter-border"></div>
            //     <div class="letter-salute">Hey there, <br></br> It's Aditya Kishan Ankaraboyana.</div>
            //     <div class="letter-context"></div>
            //     <div class="letter-stamp">
            //         <div class="letter-stamp-inner"></div>
            //     </div>
            //     </div>
            //     <div class="top-fold"></div>
            //     <div class="body"></div>
            //     <div class="left-fold"></div>
            // </div>
            // <div class="shadow"></div>
            // </div> */}


export default Main;