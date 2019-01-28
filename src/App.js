import React, { Component } from 'react'
import NavBar from './NavBar'
import AboutMe from './AboutMe'
import Footer from './Footer'
import './App.css';
import MediaQuery from 'react-responsive'
import PortfolioCard from './PortfolioCard'
import { RMWCProvider } from '@rmwc/provider';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      light: 'Off',
      backgroundColor: '#35364a'
    }
  }

  LightSwitch(){
    let {light, backgroundColor} = this.state
    light = light === 'Off' ? 'On' : 'Off'
    backgroundColor = light === 'Off' ? '#35364a' : '#ffc22d'
    this.setState({light: light, backgroundColor: backgroundColor})
  }

  render() {
    let style = {
      backgroundColor: `${this.state.backgroundColor}`
    }
    return (
      <div style={style}>
        <AboutMe/>
        <PortfolioCard lightSwitch={this.LightSwitch.bind(this)} light={this.state.light}/>
      </div>

    );
  }
}

export default App;



// <AboutMe/>
// <NavBar/>
// <PortfolioCard/>
// <Footer/>
