import React, { useEffect } from 'react';
import './App.css';
import { getMovies } from './services/movie-apis';

const App: React.FC = () => {
  useEffect(() => {
    const getData = async () => {
      const movies = await getMovies();
      console.log('movies: ', movies);
    };

    getData();
  }, []);
  return <div>Filter app</div>;
};

export default App;
