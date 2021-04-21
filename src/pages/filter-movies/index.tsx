import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { IMovies } from '../../App';
import FilterMoviesCheckBox from './filter-movies-checkbox';
import useMovieRatingFilter from '../../hooks/use-movie-rating-filter';
import FilterMoviesMediaCard from './filter-movies-media-card';

interface FilterMoviePageProps {
  movies: IMovies[];
  ratingsSpectrum: number;
}

const FilterMoviesPage: React.FC<FilterMoviePageProps> = ({
  movies,
  ratingsSpectrum,
}: FilterMoviePageProps) => {
  const ratingsCheckboxMap = Array.from(
    { length: ratingsSpectrum },
    (_, i) => ratingsSpectrum - i,
  );
  const {
    updateFilteredRating,
    filteredMovies,
    filteredRatings,
  } = useMovieRatingFilter(movies);

  const showNoMoviesBanner =
    filteredRatings.length > 0 && filteredMovies.length === 0;

  console.log('renderring');

  return (
    <Grid container>
      <Grid>
        {ratingsCheckboxMap.map((ratingNumber) => (
          <FilterMoviesCheckBox
            key={ratingNumber}
            ratingNumber={ratingNumber}
            updateFilteredRating={updateFilteredRating}
          />
        ))}
      </Grid>
      <Grid>
        {!!filteredMovies.length && (
          <Typography component='h1'>
            Movies found: {filteredMovies.length}
          </Typography>
        )}
        {filteredMovies.map(({ title, vote_average, backdrop_path, id }) => (
          <FilterMoviesMediaCard
            key={id}
            title={title}
            vote_average={vote_average}
            backdrop_path={backdrop_path}
          />
        ))}
      </Grid>
      {showNoMoviesBanner && <Typography>No movies found</Typography>}
    </Grid>
  );
};

export default FilterMoviesPage;
