import React, { Component } from 'react';
import Post from './Post';

export default class Posts extends Component {
  render() {
    return (
      <div className="left">
        <Post src="https://secure.i.telegraph.co.uk/multimedia/archive/03523/Cat-Photo-Bombs-fa_3523609b.jpg" alt="cat1" />
        <Post src="http://allaboutcat.org/wp-content/uploads/2015/12/Cat-Scottish-Fold-6.jpg" alt="cat2" />        
      </div>
    )
  }
}
