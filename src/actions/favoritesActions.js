export const TOGGLE_FAVORITES = 'TOGGLE-FAVORITES';
export const ADD_FAVORITES = 'ADD-FAVORITES';
export const REMOVE_FAVORITE = 'REMOVE-FAVORITE';

export const toggleFavorites = () => {
	return { type: TOGGLE_FAVORITES };
};

export const addFavorites = (movie) => {
	console.log(movie);
	return { type: ADD_FAVORITES, payload: movie };
};

export const removeFavorites = (id) => {
	return { type: REMOVE_FAVORITE, payload: id };
};
