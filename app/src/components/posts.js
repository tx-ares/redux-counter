import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  componentWillMount() { // This runs every time this component is called.
      this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps) { // This runs when props are sent to this component.
      if(nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost); // Add to beginning of array. 
      }
  }

  render() {
    const postItems = this.props.posts.map(post => (
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

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
 })

export default connect(mapStateToProps, { fetchPosts })(Posts);
