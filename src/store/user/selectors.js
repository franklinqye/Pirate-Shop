export const initialState = {
  moviesSelected: {},
  movieCount: 0,
}

export const getMoviesSelected = (state = initialState) => state.moviesSelected || initialState.moviesSelected
export const getMovieCount = (state = initialState) => state.movieCount || initialState.movieCount