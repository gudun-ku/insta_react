import React, { Component } from 'react';
import InstaService from '../services/instaService';

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

  render() {
    return (
      <div className="left">
        
      </div>
    )
  }
}
