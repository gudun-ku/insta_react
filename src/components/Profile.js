import React from 'react';
import User from './User';
import Palette from './Palette';
import ID from '../utils/ID';

const Profile = () => {
  return(
    <div className="container profile">
      <User 
        id={ID}
        src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
        alt="man"
        name="Monkey Mutant"          
        min={true}
      />  
      <Palette />
    </div>
  );
}

export default Profile;
