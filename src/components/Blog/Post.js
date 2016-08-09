import React, { PropTypes } from 'react'
import axios from 'axios';
import marked from 'marked';
import hljs from 'highlight.js';
class Post extends React.Component {
  constructor(){
    super();
    this.state={
      rawContext:'',

    }
  }

  componentDidMount(){
     // use math random to avoid browser cache
    let address = `https://raw.githubusercontent.com/Gqq475/big-demo/master/posts/${ this.props.params.title }.md?v=${Math.random()}`
    axios.get(address).then((res) => {

      this.setState({
        rawContext: res.data,

      });

    });
  }
  render () {
    marked.setOptions({
      highlight: function (code) {
      return hljs.highlightAuto(code).value;
      }
    });
    let content = marked(this.state.rawContext!='' ? this.state.rawContext : '请稍等......' );
    return(
      <div>


          <div className="post-content">
            <span dangerouslySetInnerHTML={{__html: content}} />
          </div>
     </div>
    )
  }
}

export default Post;
