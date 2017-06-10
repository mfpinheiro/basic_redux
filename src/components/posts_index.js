/**
 * Created by mfpinheiro on 09/06/17.
 */
import React, { Component } from 'react';
import  { fetchPosts } from '../actions';
import { connect } from 'react-redux';

class PostsIndex extends Component {
  componentDidMount(){

  }

  render() {
    return (
      <div>Posts</div>
    )
  }
}

export default connect(null, {
  fetchPosts
})(PostsIndex);
