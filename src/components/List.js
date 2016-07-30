import React from 'react'
import map from 'lodash/fp/map';

import BlogCard from './Card.js';
import blogs from '../blogs/blogs.js';

class List extends React.Component {
  render () {
    // console.log(this.props.search)
    var blogCards = [];
    if (this.props.search=='') {
      map((b) => {blogCards.push(<BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},blogs);
    }else {
      let query=new RegExp(this.props.search,"i");
      for (var i = 0; i < blogs.length; i++) {
        if (query.test(blogs[i].title)) {
          blogCards.push(<BlogCard title={blogs[i].title} date={blogs[i].date} index={blogs[i].index} key={Math.random()}/>)
        }
      }
    }

    let styles={
      root:{
        maxWidth:'700px',
        padding:'30px 10px',
        margin:'0 auto',
      }
    }
    return(
      <div style={styles.root}>
        {blogCards}
      </div>
    )
  }
}

export default List;
