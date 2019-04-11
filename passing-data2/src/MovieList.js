import React, { Component } from 'react'
import UserList from './UserList';

class MovieList extends Component {

  render() {
	const { profiles, users, movies } = this.props;
	const moviesData = Object.values(movies);
    
    return (
      <div className="container card-group">
      	<div className="row">
          {moviesData.map((movie) => (
      		<div className="col-12 col-md-4">
              <div className="card p-3 mt-2 bg-light" key={movie.id}>
                <h2>{movie.name}</h2>
                <UserList movieID={movie.id} users={users} profiles={profiles} />
              </div>
			</div>

            ))}
		</div>
	</div>
	);
  }
}

export default MovieList
