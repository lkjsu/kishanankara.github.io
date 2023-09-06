import './App.css';
import React from 'react';

function setColor(date) {
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
            bgColor: setColor(new Date().toLocaleTimeString('en-GB'))
        };
        this.colors = ['#183D3D','#A8DF8E'];
        this.buttonNames = ['Lights OFF','Lights ON']
    }

    componentDidMount() {
        // document.addEventListener('scroll', () => {
        //     // console.log(window.scrollY);
        //     var value = window.scrollY;
        //     console.log(Math.round(Math.abs(value / 2)) % this.colors.length)
        //     this.setState({bgColor:this.colors[Math.round(Math.abs(value / 4)) % this.colors.length]});
        // });
    }

    handleClick(color) {
        this.setState({bgColor : color});
    }

    render() {
    return (
            <div className="App-header" style={{ backgroundColor : this.state.bgColor}}>
            <p className="App-text" style={{color : this.state.bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Aditya Kishan Ankaraboyana</p>
            {/* <div>
            {
                this.colors.map((c, index) => 
                <button key={index} style={{backgroundColor: c, color: c === '#183D3D'? "white": "black"}} onClick={() => {this.handleClick(c)}}>{this.buttonNames[index]}</button>)
            }
            </div> */}
            </div>
            );
        }
    }


export default Main