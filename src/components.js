import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

class Home extends Component {
  state = {
    posts: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/');
      const posts = await res.json();
      // this.setState({
      //   posts
      // });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        "sDdsfsdfdsfdfvdcdsfd22222"
      </div>
    );
  }
}

class PostDetail extends Component {
  state = {
    post: []
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/v1/');
      const posts = await res.json();
//       const post = 1;
// 1      this.setState({
//         post
//       });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let post = this.state.post
    return (
      <div>
        "sfesfsfsfsd"
      </div>
    );
  }
}

export { About, Home, PostDetail };
