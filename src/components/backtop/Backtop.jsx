import React, { Component } from "react";

import backtop from "../../assets/images/backtop.svg";

import "./backtop.scss";

export class Backtop extends Component {
  render() {
    return (
      <div className="backtop">
        <a href="#hero">
          <img src={backtop} alt="backtop" />
        </a>
      </div>
    );
  }
}

export default Backtop;
