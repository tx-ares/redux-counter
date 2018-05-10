import React, { Component } from 'react';

class PostForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) { // This is ALWAYS required to create a component level state.  Remember this.
      super(props); //
      this.state = { //
      } //
  } // - All this.


  render() {

    return (
    <div>
      <h1>Add Post</h1>
    </div>
    );
  }
}

export default PostForm;
