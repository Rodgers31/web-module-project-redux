import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFavorites } from './../actions/favoritesActions';

const FavoriteMovieList = (props) => {
	const { favorites, removeFavorites } = props;

	const handleClick = (id) => {
		removeFavorites(id);
	};

	return (
		<div className='col-xs savedContainer'>
			<h5>Favorite Movies</h5>
			{favorites.map((movie) => {
				return (
					<div key={movie.id}>
						<Link
							className='btn btn-light savedButton'
							to={`/movies/${movie.id}`}
						>
							{movie.title}
							<span
								onClick={() => {
									handleClick(movie.id);
								}}
							>
								<span className='material-icons'>remove_circle</span>
							</span>
						</Link>
					</div>
				);
			})}
		</div>
	);
};

const mapSateToProps = (state) => {
	return {
		favorites: state.favoritesReducer.favorites,
	};
};

export default connect(mapSateToProps, { removeFavorites })(FavoriteMovieList);
