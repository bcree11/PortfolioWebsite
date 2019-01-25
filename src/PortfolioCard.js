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


export default class Test extends Component{
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
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/1.jpg', text: 'Hello'},
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/2.jpg', text: 'Hola'},
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/3.jpg', text: 'What\'s Up'},
    {image: 'https://material-components-web.appspot.com/images/photos/2x3/4.jpg', text: 'Yep'}
  ].map(src => (
    <ImageListItem src={src.text} style={{ marginBottom: '16px' }}>
      <ImageListImage src={src.image} style={{height: '33vh'}}/>
      <ImageListSupporting>
        <ImageListLabel>{src.text}</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>
  ))}
</ImageList>
</div>
    )
  }
}
