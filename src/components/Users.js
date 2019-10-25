import React, { Component } from 'react'
import User from './User';
import InstaService from '../services/instaService';
import ErrorMessage from './Error';
import ID from '../utils/ID';


export default class Users extends Component {
  InstaService = new InstaService();

  state = {
    users: [],
    error: false
  }

  updateUsers() {
    this.InstaService.getAllUsers()
    .then(this.onUsersLoaded)
    .catch(this.onError);
  }

  onUsersLoaded = (users) => {
    this.setState(
      {
        users,
        error: false
      }      
    );    
  }

  onError = (err) => {
    this.setState(
      {     
        error: true
      }
    );
  }

  componentDidMount() {
    this.updateUsers();
  }

  renderItems(arr) {
    return arr.map(item => {      
      return (
        <User 
          key={ID()}          
          src={item.src}
          alt={item.alt}
          name={item.name}        
          min={true}
        />   
      );     
    });
  }


  render() {
    const {error, users} = this.state;

    if (error) {
      return <ErrorMessage />
    }

    const renderedUsers = this.renderItems(users);
    return (
      <div className="right">
        <User           
          src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
          alt="man"
          name="Monkey Mutant"          
        />   
        <div className="users__block">
          {renderedUsers}    
        </div>
      </div>
    )
  }
}
