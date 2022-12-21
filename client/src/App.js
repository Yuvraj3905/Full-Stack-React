import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
class App extends Component {
  state = {
    hello: null,
  };

  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      // .then(res => this.setState({hello: res.data}))
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return <div>{this.state.hello ? <div>{this.state.hello}</div> : null}</div>;
  }
}

export default App;
