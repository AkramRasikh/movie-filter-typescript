import axios from 'axios';

// eslint-disable-next-line
export const getMovies = async () => {
  try {
    const {
      data: { results },
    } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`,
    );
    return results;
  } catch (error) {
    return error;
  }
};
