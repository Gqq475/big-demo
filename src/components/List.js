import React from 'react';
import map from 'lodash/fp/map';

import BlogCard from './Card.js';
import blogs from '../blogs/blogs.js';
import GithubAccount from './GithubAccount/GithubAccount';
import Search from './Search.js';
class List extends React.Component {
  constructor(){
   super();
   this.state={
     text:''
   }
 }
 cardSearch(x){

   this.setState({text:x})
 }
  render () {

    var blogCards = [];
    if (this.state.text=='') {
      map((b) => {blogCards.push(<BlogCard title={b.title} date={b.date} index={b.index} key={Math.random()}/>);},blogs);
    }else {
      let query=new RegExp(this.state.text,"i");
      for (var i = 0; i < blogs.length; i++) {
        if (query.test(blogs[i].title)) {
          blogCards.push(<BlogCard title={blogs[i].title} date={blogs[i].date} index={blogs[i].index} key={Math.random()}/>)
        }
      }
    }

    let styles={
      root:{
        maxWidth:'100%',
        padding:'20px 20px',
        margin:'0 auto',
      }
    }
    return(
      <div >
        <Search change={this.cardSearch.bind(this)}/>
        <div style={styles.root}>
        {blogCards}
       </div>

      </div>
    )
  }
}
  // <GithubAccount />
export default List;
