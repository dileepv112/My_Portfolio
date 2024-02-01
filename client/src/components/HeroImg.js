import "./HeroImgStyle.css";
import IntroImg1 from "../assets/IMG1.png"
import IntroImg from "../assets/introimg.jpg"
import React from 'react'
import {Link} from "react-router-dom"
import Typical from "react-typical";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
           <img className="intro-img" src={IntroImg} alt="IntroImg"/>
           <img className="intro-img1" src={IntroImg1} alt="IntroImg"/>
        </div>
        <div className="content">
          <p className="pp1">HI, I'M Dileep Vishwakarma</p>
          <span className="primary-text">
              {" "}
              <h1 className="hh1">
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full Stack Developer💻",
                    1000,
                    "MERN Stack Dev😎",
                    1000,
                  ]}
                />
              </h1>
             
            </span>
          <div>
            <Link to="/project" className="btn btn-light"> 
               projects
            </Link>
            <Link to="/contact" className="btn btn-light"> 
               contact
            </Link>
            <a href="My_Resume.pdf" download="Dileep Resume">
              <button className="btn btn-light">Get Resume</button>
            </a>
          </div>
        </div>
    </div>
  )
}

export default HeroImg
