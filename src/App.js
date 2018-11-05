import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Summary from './components/Summary';
import Footer from './components/Footer';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Summary/>
        <Footer/>
      </div>
    );
  }
}

export default App;
