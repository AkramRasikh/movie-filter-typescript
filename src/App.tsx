import React, { useEffect, useState } from 'react';
import './App.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getMovies } from './services/movie-apis';
import { Grid } from '@material-ui/core';
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
}

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const classes = useStyles();

  const formatMovies = ({ id, vote_average, overview, title }: IMovies) => ({
    id,
    vote_average,
    overview,
    title,
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
        console.log('error: ', error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return loading ? (
    <Grid className={classes.root}>
      <CircularProgress />
    </Grid>
  ) : (
    <FilterMovies movies={movies} ratingsSpectrum={10} />
  );
};

export default App;
