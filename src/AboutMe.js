import React, { Component } from 'react'
import './AboutMe.css'

export default class AboutMe extends Component {
  render(){
    return(
      <div style={containerStyle}>
        <div style={titlePicStyles}></div>
        <div style={aboutContStyles}>
          <div style={picStyles}>
          </div>
          <h1>Brandon Cree</h1>
          <h4>Full-Stack Web Developer</h4>
          <div style={aboutMeStyles}>
            <h3>About Me</h3>
            <p>Hi, my name is Brandon. I’m a student at LEARN Academy, where I’m studying the ins and outs of full stack web development after 4 years in sales in the beer industry. I’m a logical thinker who enjoys problem solving and building things out piece by piece. </p>
          </div>
          <div style={contactStyles}>
            <h3>Contact</h3>
            <table>
              <tr>
                <th><p>B.Marcus.Cree@gmail.com</p></th>
              </tr>
              <tr>
                <th><i class="zmdi zmdi-linkedin-box"></i> <i class="zmdi zmdi-github-box"></i></th>
              </tr>
            </table>
            <p></p>
          </div>
        </div>
      </div>
    )
  }
}

let containerStyle = {
    display: 'grid',
    gridTemplateColumns: 'auto auto'
}

let titlePicStyles = {
  backgroundColor: 'red',
  height: '100vh',
  width: '61.8vw',
}

let aboutContStyles = {
  backgroundColor: 'yellow',
  height: '100vh',
  width: '38.2vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}

let picStyles = {
  backgroundColor: 'blue',
  height: '30.56vw',
  width: '30.56vw',
  borderRadius: '50%',
  marginTop: '60px',
  marginBottom: '20px',
}

let aboutMeStyles = {
  width: '30.56vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '40px',
}

let contactStyles = {
  marginTop: '40px',
  textAlign: 'center'
}
