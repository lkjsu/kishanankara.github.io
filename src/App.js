import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Experience from './Experience';
import Nav from './Navigation';
import Projects from './Projects';

class App extends React.Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <div>
                    <Nav />
                    <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/Experience" element={<Experience/>} />
                    <Route path="/Projects" element={<Projects />} />
                    </Routes>
                    </div>
                </HashRouter>
            </div>
        )
    }
}

export default App;