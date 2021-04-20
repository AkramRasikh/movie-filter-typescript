import axios from 'axios';

export const getMovies = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_API_KEY}&language=en-US&page=1`,
    );
    return data;
  } catch (error) {
    return error;
  }
};
