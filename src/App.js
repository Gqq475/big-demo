import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import Header from './components/Header';
import List from './components/List';
import Footer from './components/Footer';
class App extends React.Component {
  constructor(){
    super();
    this.state={
      search:''
    }
  }
  cardSearch(x){
    this.setState({search:x})
  }
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }

  render () {
    return(
      <div>

        <Header change={this.cardSearch.bind(this)}/>
        <List search={this.state.search}/>
        <Footer />
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
