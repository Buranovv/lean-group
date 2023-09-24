import React, { Component } from "react";
import Fade from "../sliders/HeroSlide";

import vk from "../../assets/images/vk.svg";
import linkedin from "../../assets/images/linkedin.svg";
import fb from "../../assets/images/fb.svg";

import "./hero.scss";
import { blank } from "../footer/Footer";
export class Hero extends Component {
  render() {
    return (
      <section id="hero">
        <div className="container">
          <div className="hero-box">
            <Fade />
            <div className="social-box">
              <a href="https://www.vk.com" target={blank}>
                <img src={vk} alt="vk" />
              </a>
              <a target={blank} href="https://www.facebook.com">
                <img src={fb} alt="facebook" />
              </a>
              <a target={blank} href="https://uz.linkedin.com/">
                <img src={linkedin} alt="linked in" />
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
