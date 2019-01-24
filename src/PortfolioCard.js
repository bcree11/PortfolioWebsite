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
    columnCount: 3,
    columnGap: '8db',
    maxWidth: '90%'
  }}
>
  {[
    'https://material-components-web.appspot.com/images/photos/2x3/1.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/2.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/3.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/4.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/5.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/6.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/7.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/8.jpg',
    'https://material-components-web.appspot.com/images/photos/2x3/1.jpg',
  ].map(src => (
    <ImageListItem key={src} style={{ marginBottom: '16px' }}>
      <ImageListImage src={src} />
      <ImageListSupporting>
        <ImageListLabel>Random</ImageListLabel>
      </ImageListSupporting>
    </ImageListItem>
  ))}
</ImageList>
</div>
    )
  }
}
