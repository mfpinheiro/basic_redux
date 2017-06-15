/**
 * Created by mfpinheiro on 11/06/17.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPost } from '../actions';
import { deletePost } from '../actions';

class PostShow extends Component {
  componentDidMount() {
    if (!this.props.post) {
      const id = this.props.match.params.id;
      this.props.fetchPost(id);
    }
  }

  onDeleteClick = () => {
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => {
      this.props.history.push('/')
    });
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>
    }
    return (
      <div>
        <Link to="/">Back to index</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick}
        >
          Delete Post
          </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

// application state, ownProps - 
function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);
