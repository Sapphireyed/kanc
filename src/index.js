import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './navbar.js';
import Card from './Nav.js';
import Home from './home.js';
import Service from './service.js';
import Kontakt from './kontakt.js';
import Footer from './footer.js';

ReactDOM.render(<Card />, document.getElementById('side'));
ReactDOM.render(<Navbar />, document.getElementById('nav'));
ReactDOM.render(< Home />, document.getElementById('home'));
ReactDOM.render(< Service />, document.getElementById('service'));
ReactDOM.render(< Kontakt />, document.getElementById('kontakt'));
ReactDOM.render(< Footer />, document.getElementById('footer'));