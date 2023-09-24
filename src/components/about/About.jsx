import React, { Component } from "react";

import aboutImg from "../../assets/images/video.png";

import "./about.scss";

export class About extends Component {
  render() {
    return (
      <section className="about">
        <div className="container">
          <h2 className="regular-title">
            О компании <span className="reg-title-span">LEANGROUP</span>
          </h2>
          <div className="content-box">
            <img src={aboutImg} alt="about this site" />
            <p className="about-text">
              <span>
                Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и
                на сегодняшний день является ведущей компанией по производству
                ламинатных и экструзионных туб.{" "}
              </span>
              <span>
                Имея две технологии – для производства ламинатных и
                экструзионных туб, мы предлагаем вам широкий спектр
                возможностей. Большим преимуществом является собственный
                печатный цех в ламинате и in-line печать в экструзии с
                возможностью различных дополнительных опций декора. Особое
                внимание уделяется работе с поставщиками для контроля и
                поддержания качества производимой нами продукции.
              </span>
              <span>
                С января 2018 года компания стала членом Европейской Ассоциации
                производителей туб (ETMA), что подтверждает сильную позицию
                бренда и на рынке Европы.
              </span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
