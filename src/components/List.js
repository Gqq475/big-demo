import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import Search from './Search'
import Card from './Card.js';

class Blog extends Component {
  constructor(){
    super();
    this.state={
      text:'',
      posts: ''
    }
  }
  cardSearch(){
    this.setState({text:x})}
  }
  componentDidMount(){
     // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/Gqq475/big-demo/master/posts/index.json?v=${Math.random()}`
    axios.get(address).then((res) => {
      console.log(res);
      this.setState({
        posts: res.data
      });
    });
  }

  render(){
    // console.log(Cards.length);
    var blogCards = [];
    map((b) =>  {
                  blogCards.push(
                    <Card title={b.title} date={b.created_at } index={b.id} key={Math.random()}/>
                  );
                },
        this.state.posts
    );
    // console.log(AllCards);
    return(
      <div>
        <Search  change={this.state.cardSearch}/>
        <div style={{marginTop:"30px"}}>
        {blogCards}
      </div>
      </div>
    )
  }
}

export default Blog;
