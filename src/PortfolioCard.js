import React, { Component } from 'react'
import './App.css';
import {
  ImageList,
  ImageListItem,
  ImageListImage,
  ImageListSupporting,
  ImageListLabel
} from '@rmwc/image-list';
import '@material/image-list/dist/mdc.image-list.css';
import MediaQuery from 'react-responsive';


export default class PortfolioCard extends Component{
  constructor(props){
    super(props)
    this.state = {
      colorCounter: 0,
      lightCounter: 0,
      colors: [    {word:'Yellow',code:'#f7e51b',font:'#000000'},
                   {word:'Blue',code:'#1260ce', font:'#FFFFFF'},
                   {word:'Orange',code:'#db6606', font:'#000000'},
                   {word:"Bianchi Blue",code:'#1df7f0', font:'#000000'},
                   {word:'Red',code:'#ba1024', font:'#000000'},
                   {word:'Black',code:'#000000', font:'#FFFFFF'}],
      sunAndMoon: './img/Moon.png',
    }
  }

  ColorBox = () => {
    let {colors, colorCounter} = this.state
    if(colorCounter < colors.length - 1){
      colorCounter += 1
    } else {
      colorCounter = 0
    }
    this.setState({colorCounter: colorCounter})
  }

  SunChange = () => {
    let {sunAndMoon, lightCounter} = this.state
    const {lightSwitch}=this.props
    lightSwitch()
    sunAndMoon = lightCounter%2 !== 0 ? "./img/Moon.png" : "./img/Sun.png"
    this.setState({sunAndMoon: sunAndMoon, lightCounter: lightCounter+1})
  }

  render(){
    let {colorCounter, colors} = this.state
    return(
      <div>
      <ImageList
  masonry
  withTextProtection
  style={{
    columnCount: 4,
    columnGap: '8db',
    maxWidth: '90%',
    height: ''
  }}
>
  {[
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/1.jpg',
      title: 'Tic Tac Toe',},
    { image: 'https://material-components-web.appspot.com/images/photos/2x3/4.jpg',
      title: 'Christmas Present Hunt'},
    { background: this.state.sunAndMoon,
      title: 'Light Switch: Click Me!',
      click: this.SunChange},
    { color: colors[colorCounter].code,
      title: 'Color Box: Click Me!',
      click: this.ColorBox},
  ].map(src => (
    <ImageListItem src={src.title} style={{ marginBottom: '16px' }}>
      <ImageListImage src={src.image} onClick={src.click} style={{height: '33vh', backgroundColor: src.color, backgroundImage: `url(${src.background})`}}/>
      <ImageListSupporting style={labelStyle}>
        <ImageListLabel>{src.title}</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>
  ))}
</ImageList>
</div>
    )
  }
}

const labelStyle = {
  display: 'flex',
  justifyContent: 'center'
}
