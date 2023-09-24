import React, { Component } from "react";
import Slider from "react-slick";

import "./heroSlide.scss";

export default class Fade extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="hero-slide" style={{ maxWidth: "582px" }}>
            <div className="slide-body">
              <p className="tex1">LEANGROUP - тубы и этикетки</p>
              <h2 className="regular-title">Ламинатные тубы</h2>
              <p className="text2">
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className="katalog">Каталог</button>
            </div>
          </div>
          <div className="hero-slide">
            <div className="slide-body">
              <p className="tex1">LEANGROUP - тубы и этикетки</p>
              <h2 className="regular-title">Ламинатные тубы</h2>
              <p className="text2">
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className="katalog">Каталог</button>
            </div>
          </div>
          <div className="hero-slide">
            <div className="slide-body">
              <p className="tex1">LEANGROUP - тубы и этикетки</p>
              <h2 className="regular-title">Ламинатные тубы</h2>
              <p className="text2">
                Используются для производства зубных паст. Широко применяются в
                сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
                химии и DIY (Do-it-Yourself).
              </p>
              <button className="katalog">Каталог</button>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
