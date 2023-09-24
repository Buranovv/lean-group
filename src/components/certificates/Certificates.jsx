import React, { Component } from "react";

import SimpleSlider from "../sliders/CertifSlider";
import "./certificates.scss";

export class Certificates extends Component {
  render() {
    return (
      <section className="cer">
        <div className="container">
          <h2 className="regular-title">
            Качество продукции подтверждают 
            <span className="reg-title-span"> сертификаты</span>
          </h2>
          <SimpleSlider />
        </div>
      </section>
    );
  }
}

export default Certificates;
