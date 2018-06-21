import React, { Component } from 'react';
import './sass/main.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './js/Home';
import About from './js/About';
import News from './js/News';
import NavBar from './js/NavBar';
import ContactForm from './js/ContactForm';
import Events from './js/Events';
import Equipment from './js/Equipment'
import Footer from './js/Footer'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <NavBar/>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/news" component={News}/>
            <Route path="/equipment" component={Equipment}/>
            <Route path="/events" component={Events}/>
            <Route path="/form" component={ContactForm}/>
            <Footer/>
        </div>
      </Router>
    )
  }
}

export default App;
