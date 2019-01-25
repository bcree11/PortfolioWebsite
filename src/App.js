import React, { Component } from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Footer from './Footer'
import './App.css';
import MediaQuery from 'react-responsive'
import PortfolioCard from './PortfolioCard'
import { RMWCProvider } from '@rmwc/provider';

class App extends Component {
  render() {
    return (
      <div>
        <PortfolioCard/>
        <PortfolioCard/>

      </div>

    );
  }
}

export default App;



// <AboutMe/>
// <NavBar/>
// <PortfolioCard/>
// <Footer/>
