import React, { Component } from 'react'

//propably change this to regular div
export default class Footer extends Component {
  render(){
    return(
          <div style={footerStyles}>
            <footer style={{height: '100px'}}>
              <h3 style={nameStyles}>Brandon Cree</h3>
              <p style={contactStyles}>(301) 648-6293 | bmcree0811@gmail.com</p>
            </footer>
          </div>

    )
  }
}

const footerStyles = {
  height: '100px',
  width: '100%',
  textAlign: 'center',
  backgroundColor: 'darkgray',
}

const nameStyles = {
  paddingTop: '20px',
  margin: '0px',
  display:'inline-block',
}

const contactStyles = {
  marginTop: '5px',
  marginBottom: '0px',
}
