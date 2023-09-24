import React, { Component } from "react";
import Slider from "react-slick";

import cer1 from "../../assets/images/image7.png";
import cer2 from "../../assets/images/image8.png";
import cer3 from "../../assets/images/image9.png";
import cer4 from "../../assets/images/image10.png";
import cer5 from "../../assets/images/image11.png";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={cer1} alt="certificate" />
          </div>
          <div>
            <img src={cer2} alt="certificate" />
          </div>
          <div>
            <img src={cer3} alt="certificate" />
          </div>
          <div>
            <img src={cer4} alt="certificate" />
          </div>
          <div>
            <img src={cer5} alt="certificate" />
          </div>
          <div>
            <img src={cer3} alt="certificate" />
          </div>
          <div>
            <img src={cer1} alt="certificate" />
          </div>
          <div>
            <img src={cer5} alt="certificate" />
          </div>
          <div>
            <img src={cer4} alt="certificate" />
          </div>
          <div>
            <img src={cer1} alt="certificate" />
          </div>
          <div>
            <img src={cer5} alt="certificate" />
          </div>
          <div>
            <img src={cer3} alt="certificate" />
          </div>
          <div>
            <img src={cer1} alt="certificate" />
          </div>
          <div>
            <img src={cer5} alt="certificate" />
          </div>
          <div>
            <img src={cer2} alt="certificate" />
          </div>
        </Slider>
      </div>
    );
  }
}
