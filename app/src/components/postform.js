import React, { Component } from 'react';

class PostForm extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) { // This is ALWAYS required to create a component level state.  Remember this.
      super(props); //
      this.state = { //
          title: '',
          body: ' '
      }; //

      this.onChange = this.onChange.bind(this);
  } // - All this.

  onChange(e) {
      this.setState({ [e.target.name]: e.target.value });
  }

  render() {

    return (
    <div>
        <h1>Add Post</h1>
        <form>
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

export default PostForm;
