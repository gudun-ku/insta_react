import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User 
        src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
        alt="man"
        name="Monkey Mutant"          
      />     
      <div className="users__block">
        <User 
          src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
          alt="man"
          name="Monkey Mutant"          
          min={true}
        />   
        <User 
          src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
          alt="man"
          name="Monkey Mutant"          
          min={true}
        />  
        <User 
          src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
          alt="man"
          name="Monkey Mutant"          
          min={true}
        />  
        <User 
          src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
          alt="man"
          name="Monkey Mutant"          
          min={true}
        />  
        <User 
          src="http://www.freakingnews.com/pictures/49500/Monkey-Man-Mutant--49750.jpg"
          alt="man"
          name="Monkey Mutant"          
          min={true}
        />  
      </div>
      
    </div>
  )
}
