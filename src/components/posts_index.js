/**
 * Created by mfpinheiro on 09/06/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import { Link }   from 'react-router-dom';
import { connect } from 'react-redux';
import  { fetchPosts } from '../actions';


class PostsIndex extends Component {
  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      )
    })
  };

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <div className="text-xs-right">
          <Link className="btn btn-primary"
                to="/posts/new"
          >
            Add new post.
          </Link>
        </div>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>

    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, {
  fetchPosts
})(PostsIndex);
