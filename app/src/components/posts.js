import React, { Component } from 'react';

class Posts extends Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
      fetch('https://jsonplaceholder.typicode.com/posts') // This is the API call. Will fetch dummy data first,
        .then(res => res.json()) // then , a promise is created to map the data into a json object...
        .then(data => console.log(data)) // and finally, console.log the data.
  }

  render() {
    return (
      <div>Posts</div>
    );
  }
}

export default Posts;
