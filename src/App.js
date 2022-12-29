
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Pages/Home';
import {  Routes, Route, } from "react-router-dom";
import Search from './Components/Pages/Search';
// import SearchMovies from './Components/SearchMovies/SearchMovies';


function App() {
 
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='Home' element={<Search />}>
          </Route>
        </Route>
        <Route path='*' element={<Home />}>
        </Route>
      </Routes>

    </div>

  );
}

export default App;
