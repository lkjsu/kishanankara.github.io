import './App.css';
import React from 'react';
import Container from './Container'

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#F79BD3'
        };
        this.colors = ['#241468','#F79BD3'];
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
        console.log("click button")
        this.setState({bgColor : color});
    }

    render() {
    return (
            <div className="App-header" style={{ backgroundColor : this.state.bgColor}}>
            <p className="App-text">Aditya Kishan Ankaraboyana</p>
            <div>
            {
                this.colors.map((c, index) => 
                <button key={index} style={{backgroundColor: c, color: c === '#241468'? 'white': 'black'}} onClick={() => {this.handleClick(c)}}>{this.buttonNames[index]}</button>)
            }
            </div>
            </div>
            );
        }
    }


export default Main