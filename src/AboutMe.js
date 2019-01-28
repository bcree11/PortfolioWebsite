import React, { Component } from 'react'
import './AboutMe.css'

export default class AboutMe extends Component {
  render(){
    return(
      <div style={containerStyle}>
        <div style={titlePicStyles}>
          <div style={nameStyles}><h1 style={myNameStyles}>B.CREE</h1></div>
        </div>
        <div style={aboutContStyles}>
          <div style={picStyles}>
          </div>
          <h1>Brandon Cree</h1>
          <h4>Full-Stack Web Developer</h4>
          <div style={aboutMeStyles}>
            <table>
            <h3>About Me</h3>
            <th><p>Hi, my name is Brandon. I’m a student at LEARN Academy, where I’m studying the ins and outs of full stack web development after 4 years in sales in the beer industry. I’m a logical thinker who enjoys problem solving and building things out piece by piece.</p></th>
            </table>
          </div>
          <div style={contactStyles}>
            <table>
            <h3>Get In Touch</h3>
              <tr>
                <th><p>B.Marcus.Cree@gmail.com</p></th>
              </tr>
              <tr>
                <th><span><i class="zmdi zmdi-linkedin-box"></i> <i class="zmdi zmdi-github-box"></i></span></th>
              </tr>
            </table>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}

const containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
}

const titlePicStyles = {
  height: '93vh',
  width: '75vw',
  position: 'relative',
  backgroundImage: `url(${"./img/beachSunset.jpg"})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: '50%',
  backgroundPositionX: '45%',
  backgroundPositionY: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const nameStyles = {
  display: 'inline-block',
  marginBottom: '250px',
}

const myNameStyles = {
  fontSize: '10rem',
  transform: 'scale(1,2.5)',
  color: 'white',
  // backgroundColor: 'black',
  // backgroundImage: `url(${"./img/cloud.jpg"})`,
  // backgroundRepeat: 'no-repeat',
  // backgroundSize: 'cover',
  // backgroundPosition: 'center',
  // webkitTextFillColor: 'transparent',
  // webkitBackgroundClip: 'text',
  // mixBlendMode: 'multiply',
  // textShadow: '0 0 #4a91d3',
}


const aboutContStyles = {
  backgroundColor: '#4a91d3',
  height: '93vh',
  width: '25vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
}

const picStyles = {
  backgroundColor: 'black',
  height: '16vw',
  width: '20vw',
  // borderRadius: '50%',
  marginBottom: '5px',
}

const aboutMeStyles = {
  width: '20vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '20px',
  textAlign: 'center',
}

const contactStyles = {
  marginTop: '20px',
  textAlign: 'center'
}
