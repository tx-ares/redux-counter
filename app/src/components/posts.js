import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions'

class Posts extends Component { // eslint-disable-line react/prefer-stateless-function
  // constructor(props) { // This is ALWAYS required to create a component level state.  Remember this.
  //     super(props); //
  //     this.state = { //
  //         posts: [] //
  //     } //
  // } // - All this.

  // The above is no longer needed because state is being handled in the store now, which is 'Provided' to the Posts component.

  componentWillMount() {
      this.props.fetchPosts();
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

export default connect(null, { fetchPosts })(Posts);
