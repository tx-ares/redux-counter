import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import { connect } from 'react-redux';

//Actions
import { createPost } from '../actions/postActions'

class PostForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) { // This is ALWAYS required to create a component level state.  Remember this.
      super(props); //
      this.state = { //
          title: '',
          body: ' '
      }; //

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  } // - All this.

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
      e.preventDefault();
      // if(!err) {
          const post = {
              title: this.state.title,
              body: this.state.body
          }

          // Call action
          this.props.createPost(post);
          // resetForm();
      // }
  }

  render() {

    return (
    <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title: </label> <br />
                <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
            </div>
            <div>
                <label>Body: </label> <br />
                <textarea name="body" onChange={this.onChange} value={this.state.body}/>
            </div> <br />

            <button type="submit">Submit </button>
        </form>
    </div>
    );
  }
}

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost } )(PostForm);
