import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Experience from './Experience';
import Nav from './Navigation';
import Contact from './Contact';

class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                    <Nav />
                    <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/Experience" element={<Experience/>} />
                    {/* <Route path="/Contact" element={<Contact />} /> */}
                    </Routes>
                    </div>
                </Router>
            </div>
        )
    }
}

export default App;