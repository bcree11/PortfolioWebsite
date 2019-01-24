import React, { Component } from 'react'
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarNavigationIcon,
  TopAppBarActionItem,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from '@rmwc/top-app-bar';
import '@material/top-app-bar/dist/mdc.top-app-bar.css';
import {ToolbarTitle} from '@rmwc/toolbar';
import '@material/toolbar/dist/mdc.toolbar.css';

export default class NavBar extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    return(
      <div className="Navbar">
        <TopAppBar fixed>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarNavigationIcon icon="menu" />
            </TopAppBarSection>
            <ToolbarTitle>{this.props.test}</ToolbarTitle>
            <TopAppBarSection alignEnd>
              <TopAppBarActionItem aria-label="Download" alt="Download">
                file_download
              </TopAppBarActionItem>
              <TopAppBarActionItem
                aria-label="Print this page"
                alt="Print this page"
              >
                print
              </TopAppBarActionItem>
              <TopAppBarActionItem
                aria-label="Bookmark this page"
                alt="Bookmark this page"
              >
                bookmark
              </TopAppBarActionItem>
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust></TopAppBarFixedAdjust>
      </div>
    )
  }
}
