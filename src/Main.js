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
            <p className="App-text" style={{color : this.state.bgColor === "#183D3D"? "#EEEEEE" :"#016A70"}}>Aditya Kishan Ankaraboyana</p>
            </div>
            );
        }
    }


export default Main