import './App.css';
import React from 'react';

function setColor() {
    if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
        return "#183D3D";
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
            <div className="bouncing-text">
            <div className="b" style={{color : this.state.bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Hello, this is</div>
            </div>
            <div class="App-text" style={{color : this.state.bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Aditya Kishan Ankaraboyana</div>
            {/* <p1></p1> */}
            {/* <div class="letter-image">
            <div class="animated-mail">
                <div class="back-fold"></div>
                <div class="letter">
                <div class="letter-border"></div>
                <div class="letter-salute">Hey there, <br></br> It's Aditya Kishan Ankaraboyana.</div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                    <div class="letter-stamp-inner"></div>
                </div>
                </div>
                <div class="top-fold"></div>
                <div class="body"></div>
                <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
            </div> */}
            </div>
            );
        }
    }


export default Main