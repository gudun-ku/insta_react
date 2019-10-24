import React, { Component } from 'react';
import InstaService from '../services/instaService';
import Post from './Post';
import ErrorMessage from './Error';

export default class Posts extends Component {
  InstaService = new InstaService();

  state = {
    posts: [],
    error: false
  }

  updatePosts() {
    this.InstaService.getAllPosts()
    .then(this.onPostsLoaded)
    .catch(this.onError);
  }

  onPostsLoaded = (posts) => {
    this.setState(
      {
        posts,
        error: false
      }      
    );
    //test
    console.log(this.state.posts);
  }

  onError = (err) => {
    this.setState(
      {     
        error: true
      }
    );
  }

  componentDidMount() {
    this.updatePosts();
  }

  renderItems(arr) {
    return arr.map(item => {      
      return (
        <Post item={item}/>
      );     
    });
  }

  render() {
    const {error, posts} = this.state;

    if (error) {
      return <ErrorMessage />
    }

    const items = this.renderItems(posts);
    return (
      <div className="left">
        {items}
      </div>
    )
  }
}
