import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { IMovies } from '../App';
import { Checkbox } from '../components';

interface FilterMoviePageProps {
  movies: IMovies[];
  ratingsSpectrum: number;
}

const FilterMoviesPage: React.FC<FilterMoviePageProps> = ({
  movies,
  ratingsSpectrum,
}: FilterMoviePageProps) => {
  const [filteredRatings, setFilteredRatings] = useState<number[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<IMovies[]>(movies);
  const ratingsCheckboxMap = Array.from(
    { length: ratingsSpectrum },
    (_, i) => ratingsSpectrum - i,
  );

  const showNoMoviesBanner =
    filteredRatings.length > 0 && filteredMovies.length === 0;

  useEffect(() => {
    if (filteredRatings.length === 0) {
      setFilteredMovies(movies);
    } else {
      const updatedMovieState = movies.filter((filteredMovie) => {
        if (filteredRatings.includes(Math.floor(filteredMovie.vote_average))) {
          return true;
        }
        return false;
      });
      setFilteredMovies(updatedMovieState);
    }
  }, [filteredRatings]);

  const updateFilteredRating = (id: number, checked: boolean) => {
    if (checked) {
      setFilteredRatings([...filteredRatings, id]);
    } else {
      setFilteredRatings(
        filteredRatings.filter((ratingNum) => ratingNum !== id),
      );
    }
  };

  return (
    <Grid container>
      <Grid>
        {ratingsCheckboxMap.map((ratingNumber) => (
          <Grid key={ratingNumber}>
            <Checkbox
              key={ratingNumber}
              id={ratingNumber}
              updateFilteredRating={updateFilteredRating}
            />
          </Grid>
        ))}
      </Grid>
      <Grid>
        {filteredMovies.map(({ title, vote_average, id }) => (
          <Grid key={id} data-testid='movie-id'>
            <Typography>{title}</Typography>
            <Typography>{vote_average}</Typography>
          </Grid>
        ))}
      </Grid>
      {showNoMoviesBanner && <Typography>No movies found</Typography>}
    </Grid>
  );
};

export default FilterMoviesPage;
