import React, { Component } from 'react';

class PostsIndex extends Component {
  // A life-cycle method Will call when component will mount 1st time
  componentWillMount() {
    console.log('Good time to call action creator to fetch post');
  }

  render() {
    return (
      <div>List of blog posts</div>
    );
  }
}

export default PostsIndex;
