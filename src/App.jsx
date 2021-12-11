import './App.css';
import "./Components/NavBar";
// import Navbar from './Components/NavBar';
import Home from './Components/Home'
import Login from './Components/Login';
import { Redirect, Route, Switch } from 'react-router';
import About from './Components/About';
import Contactus from './Components/Contactus';
import Register from './Components/Register';
// Components of MovieHomeNavbar
import Movies from './Components/Movies';
import TrendingMovie from './Components/TrendingMovie';
import Top_ratedMovies from './Components/Top_ratedMovies';
import TvShows from './Components/TvShows';
import Top_RatedTvShows from './Components/Top_RatedTvShows';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Switch>
        <Route exact path ="/" component={Home} />
        <Route exact path ="/About" component={About} />
        <Route exact path ="/Contact" component={Contactus} />
        <Route exact path ="/Register" component={Register} />
        <Route exact path ="/Login" component={Login} />
        <Route exact path ="/Login/Movies" component={Movies} />
        <Route exact path ="/Login/TrendingMovie" component={TrendingMovie} />
        <Route exact path ="/Login/Top_ratedMovies" component={Top_ratedMovies} />
        <Route exact path ="/Login/TvShows" component={TvShows} />
        <Route exact path ="/Login/Top_RatedTvShows" component={Top_RatedTvShows} />
        <Redirect to="/" />
      </Switch>

    </div>
  );
}

export default App;
