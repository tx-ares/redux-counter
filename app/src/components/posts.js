import React, { Component } from 'react';

class Posts extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) { // This is ALWAYS required to create a component level state.  Remember this.
      super(props); //
      this.state = { //
          posts: [] //
      } //
  } // - All this.

  componentWillMount() {
      fetch('https://jsonplaceholder.typicode.com/posts') // This is the API call. Will fetch dummy data first,
        .then(res => res.json()) // then , a promise is created to map the data into a json object...
        .then(data => console.log(data)) // and finally, console.log the data.
        .then(data => this.setState({ posts: data })) // and finally, send our data to our component state.
  }

  render() {
    return (
      <div>Posts</div>
    );
  }
}

export default Posts;
