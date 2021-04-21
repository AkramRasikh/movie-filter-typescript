import React, { useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getMovies } from './services/movie-apis';
import { Grid, Typography } from '@material-ui/core';
import FilterMovies from './pages/filter-movies';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

export interface IMovies {
  id: number;
  vote_average: number;
  overview: string;
  title: string;
  backdrop_path: string;
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const classes = useStyles();

  const formatMovies = ({
    id,
    vote_average,
    overview,
    title,
    backdrop_path,
  }: IMovies) => ({
    id,
    vote_average,
    overview,
    title,
    backdrop_path: 'https://image.tmdb.org/t/p/w400' + backdrop_path,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const moviesData = await getMovies();
        const formattedMovies = moviesData
          .map(formatMovies)
          .sort((a: IMovies, b: IMovies) => b.vote_average - a.vote_average);
        setMovies(formattedMovies);
      } catch (error) {
        setErrorMessage('Error fetching data 😥');
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {loading && (
        <Grid className={classes.root}>
          <CircularProgress />
        </Grid>
      )}
      {!!movies.length && !loading && (
        <FilterMovies movies={movies} ratingsSpectrum={10} />
      )}
      {errorMessage && !loading && <Typography>{errorMessage}</Typography>}
    </>
  );
};

export default App;
