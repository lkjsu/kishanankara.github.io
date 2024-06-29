import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Experience from './Experience';
import Nav from './Navigation';
import Projects from './Projects';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: "#A8DF8E",
            hoverColor: "#A8DF8E",
            className: "nav-item-theme-light",
            error: null
        };
    }

    componentDidMount() {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                let obj = `lat=${position.coords.latitude}&lng=${position.coords.longitude}`
                let response = await fetch("https://api.sunrisesunset.io/json?" + obj);
                let resp_obj = await response.json();
                let result = resp_obj.results
                const date = new Date()
                const ymd = date.getFullYear() + '/' + date.getMonth() + '/' + date.getDay()
                const sunrise = ymd + " " + result.sunrise
                const sunset = ymd + " " + result.sunset
                // console.log(sunrise, sunset)
                const unixsunrise = new Date(sunrise).getTime()
                const unixsunset = new Date(sunset).getTime()
                // console.log(unixsunrise, unixsunset)
                if(new Date().getTime() >= unixsunrise || new Date().getTime() <= unixsunset) {
                    this.setState({
                        bgColor: "#A8DF8E",
                        hoverColor: "#A8DF8E",
                        className: "nav-item-theme-light"
                    })
                } else {
                    this.setState({
                        bgColor: "#183D3D",
                        hoverColor: "#fff",
                        className: "nav-item-theme-dark"
                    })
                }


            }, (error) => {
                this.setState({ error: error.message });
            });

        } else {
            if(new Date().getHours() >= 18 || new Date().getHours() <= 6) {
                this.setState({
                    bgColor: "#183D3D",
                    hoverColor: "#fff",
                    className: "nav-item-theme-dark"
                })
            } else {
                this.setState({
                    bgColor: "#A8DF8E",
                    hoverColor: "#A8DF8E",
                    className: "nav-item-theme-light"
                })
            }
            this.setState({error: "Browser doesn't support geolocation, switching back to the default."});
        }
    }

    render() {
        const { bgColor, hoverColor, className } = this.state;
        return (
            <div>
                <HashRouter>
                    <div>
                    <Nav bgColor={bgColor} className={className} hoverColor={hoverColor}/>
                    <Routes>
                    <Route path="/" element={<Main bgColor={bgColor}/>} />
                    <Route path="/Experience" element={<Experience bgColor={bgColor} />} />
                    <Route path="/Projects" element={<Projects bgColor={bgColor} />} />
                    </Routes>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default App;