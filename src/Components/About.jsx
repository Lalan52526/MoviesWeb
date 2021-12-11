import React from 'react'
import './about.css'
import portfolioImage from '../Components/Images/portfolioImage.png'
import { NavLink } from 'react-router-dom'

const About = () => {
    return ( 
        <header>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       
        <section className="Portfolio">
            <div className="Portfolio_logo">
            <h2>Lalan Kumar</h2>
            </div>
            <span>
                {/* <a href="#">Home</a> */}
                {/* <NavLink  activeClassName="menu_active" className="nav-link"  to="/Home">Home</NavLink> */}
                <NavLink  to="/Home">Home</NavLink>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Gallery</a>
                <a href="#">ContactUs</a>
            </span>
        </section>
        <main>
            <div className="LeftSide">
                <h3>Hello</h3>
                <h4>I am Lalan Kumar</h4>
                <h5>Web Devloper and Content Writter</h5>
                <a href="#" className="first_btn">Hire Me</a>
                <a href="#" className="second_btn">Contact Me</a>

            </div>
            <div className="RightImg">
                <img src={portfolioImage}></img>
            </div>
        </main>
        </header>
    )
}

export default About
