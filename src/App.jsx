import React, { Component } from 'react';
import './sass/main.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './js/Home';
import About from './js/About';
import News from './js/News';
import NavBar from './js/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/news" component={News}/>
        </div>
      </Router>
    )
  }
}
export default App;
