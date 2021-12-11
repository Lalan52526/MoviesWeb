import React from 'react'
import { NavLink } from 'react-router-dom'
import image from './Images/developer pic.png'
import NavBar from '../Components/NavBar'
const Home = () => {
    return (
         <div>
           <NavBar /> 
        <div className="Homepage_face">
          <h1>WELCOME</h1>
          {/* <h2>We are The MERN Developer</h2>   */}
          <h3>Click Below For Watching Movies and Tv Series</h3>
         <h1 className="Getstart-button"> <button><NavLink className="btn btn"  to="/Login">Our Project</NavLink></button></h1>
          <div><img className="dev-homepagepic" src={image} alt="home page pic" /></div>
        </div>
        </div>
        
    )
}

export default Home