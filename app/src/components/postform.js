import React, { Component } from 'react';

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

      const post = {
          title: this.state.title,
          body: this.state.body
      }

      fetch('https://jsonplaceholder.typicode.com/posts' , { // Although it is called 'fetch' this is actually a generic name for a request.  In this case, it will be a POST type request.
          method: 'POST',
          headers: {
              'content-type' : 'application/json'
          },
          body: JSON.stringify(post)
      })
        .then(res => res.json())
        .then(data => console.log(data));
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

export default PostForm;
