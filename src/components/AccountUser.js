import React, { Component } from 'react';
import axios from 'axios';
import Card from 'material-ui/Card';
class AccountUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resString: "resString"
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/Gqq475')
         .then((res) => {
            this.setState({resString: res.data});
            console.log(res);
          });
  }
  render() {
    let styles={
      img:{
        margin:"0 auto",
        marginTop:"10px",
        display:"block",
        marginBottom:"30px"
      },
      login:{
        width:"50px",
        height:"50px",
        float:"left",
        margin:" 0 150px"
      },
      followers:{
        width:"50px",
        height:"50px",
        float:"left",
        marginRight:"100px"
      },
      following:{
        width:"50px",
        height:"50px",
        float:"left",
        marginRight:"100px"
      },
      root:{
        overflow:"hidden"
      },
      h2:{
        paddingTop:"10px",
        width:"32%",
        marginLeft:"35%"
      }

    }
    return (
      <div >
        <div  style={styles.root}>
          <h2 style={styles.h2}>My GitHub Info</h2>
        <img style={styles.img}src={this.state.resString.avatar_url} />
          <div style={styles.login}>
           <p>UserName</p>
           {this.state.resString.login}
          </div>
          <div style={styles.followers}>
           <p>followers</p>
           {this.state.resString.followers}
          </div>
          <div style={styles.following}>
           <p>following</p>
           {this.state.resString.following}
          </div>
          </div>
      </div>
    );
  }
}

export default AccountUser;
