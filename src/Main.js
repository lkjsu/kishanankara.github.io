import './App.css';
import React from 'react';

class Main extends React.Component {
    render() {
        const { bgColor } = this.props

    return (
            <div className="App-header" style={{ backgroundColor : bgColor}}>
                <div className="intro" style={{ backgroundColor : bgColor}}>
                    <div className="fade-in-text1" style={{color : bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>Hello, </div>
                    <div className="fade-in-text2" style={{color : bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>I </div>
                    <div className="fade-in-text3" style={{color : bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>am</div>
                </div>
                <div className="fade-in-text4" style={{color : bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>Aditya Kishan Ankaraboyana.</div>
                {/* <div class="fade-in-text5" style={{color : this.state.bgColor === "#053B50"? "#EEEEEE" :"#016A70"}}>software engineer with a keen interest in Backend Development.</div> */}
            </div>
            );
        }
    }


export default Main;