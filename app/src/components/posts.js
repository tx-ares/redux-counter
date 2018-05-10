import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

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
        .then(data => this.setState({ posts: data })) // and finally, send our data to our component state.
  }

  render() {
    const postItems = this.state.posts.map(post => (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    ));
    return (
    <div>
      <h1>Posts</h1>
      {postItems}
    </div>
    );
  }
}

export default Posts;
