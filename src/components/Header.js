import React from 'react';
import AppBar from 'material-ui/AppBar';

import NavBar from './NavBar';
class Header extends React.Component {
  _onLeftIconButtonTouchTap(){
    this.refs.navbar.handleToggle();
  }

  render () {
    let styles={
      root:{
        height:"auto",
        backgroundColor:'#00BCD4',
      },
      icon:{
        marginTop:'10px',
        marginLeft:'10px',
        width: '52px',
        height: '52px',
      },
      svg: {
        width: '32px',
        height: '32px',
      }
    }
    return(
      <div style={styles.root}>
        <AppBar  title="Title" onLeftIconButtonTouchTap={this._onLeftIconButtonTouchTap.bind(this)} />


        <NavBar ref='navbar'/>

      </div>
    )
  }
}

export default Header;
