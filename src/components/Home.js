import React, { PropTypes } from 'react'
import home from '../images/home.jpg'
class Home extends React.Component {
  render () {
    let styles={
      img:{
        width:"100%",
        height:"100%",
        overflow:'hidden'
      }
    }
    return(
      <div>

       <img style={styles.img}src={home} />

      </div>
    )
  }
}

export default Home;
