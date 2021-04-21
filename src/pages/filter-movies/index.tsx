import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { IMovies } from '../../App';
import FilterMoviesCheckBox from './filter-movies-checkbox';
import useMovieRatingFilter from '../../hooks/use-movie-rating-filter';
import FilterMoviesMediaCard from './filter-movies-media-card';
import FilterMoviesHeader from './filter-movies-header';

const useStyles = makeStyles(() => ({
  checkboxContainer: {
    position: 'fixed',
    left: '40px',
  },
}));

interface FilterMoviePageProps {
  movies: IMovies[];
  ratingsSpectrum: number;
}

const FilterMoviesPage: React.FC<FilterMoviePageProps> = ({
  movies,
  ratingsSpectrum,
}: FilterMoviePageProps) => {
  const classes = useStyles();
  const ratingsCheckboxMap = Array.from(
    { length: ratingsSpectrum },
    (_, i) => ratingsSpectrum - i,
  );
  const { updateFilteredRating, filteredMovies } = useMovieRatingFilter(movies);

  return (
    <>
      <FilterMoviesHeader numberOfMovies={filteredMovies.length} />
      <Grid container justify='space-around'>
        <Grid className={classes.checkboxContainer}>
          {ratingsCheckboxMap.map((ratingNumber) => (
            <FilterMoviesCheckBox
              key={ratingNumber}
              ratingNumber={ratingNumber}
              updateFilteredRating={updateFilteredRating}
            />
          ))}
        </Grid>
        <Grid>
          {filteredMovies.map(({ title, vote_average, backdrop_path, id }) => (
            <FilterMoviesMediaCard
              key={id}
              title={title}
              vote_average={vote_average}
              backdrop_path={backdrop_path}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default FilterMoviesPage;
