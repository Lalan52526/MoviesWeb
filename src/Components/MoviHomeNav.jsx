import React from 'react'
import './MovieHomeNav.css'
import { NavLink } from 'react-router-dom'

const MoviHome = () => {
    return (
        <div className=''> 
        <div className="header">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
          <section className="LinktagMovie">
            <div className="MovieHome_logo">
            <h2>Lalan Kumar</h2>
            </div>
            <span>
                <NavLink  to="/Login">Home</NavLink>
                <NavLink  to="/Login/Movies">Movies</NavLink>
                <NavLink  to="/Login/TrendingMovie">UpComing</NavLink>
                <NavLink  to="/Login/Top_ratedMovies">TopRatedMovies</NavLink>
                <NavLink  to="/Login/TvShows">TvShows</NavLink>
                <NavLink  to="/Login/Top_RatedTvShows">TopRatedTvShows</NavLink>
            </span>
          </section>
        </div>
        </div>
    
    )
}

export default MoviHome
