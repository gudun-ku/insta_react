import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
  render() {  

    const {item:{name, altname, photo, src, alt, descr, id}} = this.props;
    return (
      <div key={id} className="post">  
      <User 
        src={photo}
        alt={altname}
        name={name}
        min={true}
      />      
      <img src={src} alt={alt}></img>
      <div className="post__name">
        {name}
      </div>
      <div className="post__descr">
       {descr}
      </div>
    </div>
    ); 
  }
}
