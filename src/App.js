
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import { Home } from './pages/Home/Home';
import PopularMovies from './pages/PopularMovies/PopularMovies';
import TrendingMovies from './pages/TrendingMovies/TrendingMovies';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/popular' element={<PopularMovies/>} />
          <Route path='/trending' element={<TrendingMovies/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
    </div>
  );
}

export default App;
