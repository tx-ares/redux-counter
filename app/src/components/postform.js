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
        <form>
            <div>
                <label>Title: </label> <br />
                <input type="text" name="title" />
            </div>
            <div>
                <label>Body: </label> <br />
                <textarea name="body" />
            </div> <br />

            <button type="submit">Submit </button>
        </form>
    </div>
    );
  }
}

export default PostForm;
