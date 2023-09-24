import React, { Component } from "react";

import names from "../../assets/images/name.svg";
import icons from "../../assets/images/icon.svg";

import "./info.scss";

export class Info extends Component {
  render() {
    return (
      <div className="container">
        <section className="info">
          <h2 className="regular-title">
            Получить подробную
            <span className="reg-title-span"> информацию</span>
          </h2>
          <p className="info-text">
            Просто заполните форму, наш менеджер свяжется с вами в ближайшее
            время
          </p>
          <form className="info-form">
            <div className="name-box">
              <img className="names" src={names} alt="" />
              <input className="name" type="text" placeholder="Ваше имя" />
            </div>
            <div className="tel-box">
              <img className="icons" src={icons} alt="" />
              <input
                className="tel"
                type="tel"
                placeholder="+375 (29) 0000000"
              />
            </div>
            <textarea className="comments" name="comments" placeholder="Комментарий"></textarea>
            <button className="getInfo" type="submit">Получить информацию</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Info;
