import React, { PropTypes } from 'react'
import axios from 'axios';
import marked from 'marked';
class Post extends React.Component {
  constructor(){
    super();
    this.state={
      title:'',

    }
  }

  componentDidMount(){
     // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/Gqq475/big-demo/master/posts/git-tips.md`
    axios.get(address).then((res) => {

      this.setState({
        title: res.data,

      });
      console.log(res)
    });
  }
  render () {
    let content = marked(this.state.title!='' ? this.state.title : '请稍等......' );
    return(
      <div>
          { this.props.params.title }

          <div className="post-content">
            <span dangerouslySetInnerHTML={{__html: content}} />
          </div>
     </div>
    )
  }
}

export default Post;
