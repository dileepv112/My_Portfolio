import "./HeroImgStyle.css";
import IntroImg from "../assets/introimg.jpg"
import React from 'react'
import {Link} from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>HI, I'M A FREELANCER.</p>
          <h1>Full Stack Developer</h1>
          <div>
            <Link to="/project" className="btn"> 
               projects
            </Link>
            <Link to="/contact" className="btn btn-light"> 
               contact
            </Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg
