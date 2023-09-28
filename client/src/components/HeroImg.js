import "./HeroImgStyle.css";
import IntroImg from "../assets/introimg.jpg"
import React from 'react'
import {Link} from "react-router-dom"
import Typical from "react-typical";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
          <p>HI, I'M Dileep Vishwakarma</p>
          <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Devloper💻",
                    1000,
                    "MERN Stack Dev😎",
                    1000,
                  ]}
                />
              </h1>
             
            </span>
          <div>
            <Link to="/project" className="btn"> 
               projects
            </Link>
            <Link to="/contact" className="btn btn-light"> 
               contact
            </Link>
            <a href="Resume.jpg" download="Dileep Resume.jpg">
              <button className="btn">Get Resume</button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default HeroImg
