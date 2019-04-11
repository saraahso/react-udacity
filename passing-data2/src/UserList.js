import React, { Component } from 'react';

class UserList extends Component {
  
  render(){
  	const { movieID, users, profiles} = this.props;
    const filteredProfiles = profiles.filter( profile =>  Number(profile.favoriteMovieID) === movieID );
      
    if(filteredProfiles.length === 0) {
      return <p>None of the current users liked this movie</p>;
    }
  
  	return( 
      <div>
        <p className="text-secondary">Liked by:</p>
        <ul>
          {filteredProfiles.map(profile => (
            <li key={profile.userID}>{users[profile.userID].name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

  export default UserList;