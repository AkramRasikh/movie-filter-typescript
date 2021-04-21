import { useState, useEffect } from 'react';
import { IMovies } from '../App';

interface UseMovieRatingFilterData {
  updateFilteredRating: (id: number, checked: boolean) => void;
  filteredMovies: IMovies[];
}

const useMovieRatingFilter = (movies: IMovies[]): UseMovieRatingFilterData => {
  const [filteredRatings, setFilteredRatings] = useState<number[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovies[]>(movies);

  useEffect(() => {
    if (filteredRatings.length === 0) {
      setFilteredMovies(movies);
    } else {
      const updatedMovieState = movies.filter(({ vote_average }: IMovies) =>
        filteredRatings.includes(Math.floor(vote_average)),
      );
      setFilteredMovies(updatedMovieState);
    }
  }, [filteredRatings]);

  const updateFilteredRating = (id: number, checked: boolean) => {
    if (checked) {
      setFilteredRatings((prev) => [...prev, id]);
    } else {
      setFilteredRatings(
        filteredRatings.filter((ratingNumber) => ratingNumber !== id),
      );
    }
  };

  return { filteredMovies, updateFilteredRating };
};

export default useMovieRatingFilter;
