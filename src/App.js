import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './Home';
import './App.css'
import MovieDetails from './MovieDetails'
import Error from './Error';

const App = () => {
  return (
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='movie/:id' element={<MovieDetails />} />
        <Route path='*' element={ <Error />} />
      </Routes>
  
  )
}

export default App;