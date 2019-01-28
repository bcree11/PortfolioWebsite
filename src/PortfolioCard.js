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
  render(){
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
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/1.jpg', title: 'Tic Tac Toe',},
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/4.jpg', title: 'Christmas Present Hunt'},
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/2.jpg', title: 'Light Switch: Click Me!', click: this.props.lightSwitch},
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/3.jpg', title: 'Color Box: Click Me!'},
  ].map(src => (
    <ImageListItem src={src.title} style={{ marginBottom: '16px' }}>
      <ImageListImage src={src.image} onClick={src.click} style={{height: '33vh'}}/>
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

let labelStyle = {
  display: 'flex',
  justifyContent: 'center'
}
