import { useState, useEffect } from 'react';
import { IMovies } from '../App';

const useMovieRatingFilter = (movies: IMovies[]) => {
  const [filteredRatings, setFilteredRatings] = useState<number[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovies[]>(movies);

  useEffect(() => {
    if (filteredRatings.length === 0) {
      setFilteredMovies(movies);
    } else {
      const updatedMovieState = movies.filter((filteredMovie: IMovies) =>
        filteredRatings.includes(Math.floor(filteredMovie.vote_average)),
      );
      setFilteredMovies(updatedMovieState);
    }
  }, [filteredRatings]);

  const updateFilteredRating = (id: number, checked: boolean) => {
    if (checked) {
      setFilteredRatings((prev) => [...prev, id]);
    } else {
      setFilteredRatings(
        filteredRatings.filter((ratingNum) => ratingNum !== id),
      );
    }
  };

  return { updateFilteredRating, filteredMovies, filteredRatings };
};

export default useMovieRatingFilter;
