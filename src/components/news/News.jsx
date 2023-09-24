import { Component } from "react";

import ecovadis from "../../assets/images/bf.png";
import ekspo from "../../assets/images/be.png";
import tuba from "../../assets/images/bd.png";

import "./news.scss";

export class News extends Component {
  render() {
    return (
      <section className="news">
        <div className="container">
          <h2 className="regular-title">Новости</h2>
          <div className="news-box">
            <div className="news-card">
              <img src={ecovadis} alt="products" />
              <p className="card-text1">28.01.2022</p>
              <p className="card-text2">
                "ЛеанГрупп" серебряный призер EcoVadis!
              </p>
            </div>
            <div className="news-card">
              <img src={ekspo} alt="products" />
              <p className="card-text1">28.01.2022</p>
              <p className="card-text2">
                "ЛеанГрупп" серебряный призер EcoVadis!
              </p>
            </div>
            <div className="news-card">
              <img src={tuba} alt="products" />
              <p className="card-text1">28.01.2022</p>
              <p className="card-text2">
                "ЛеанГрупп" серебряный призер EcoVadis!
              </p>
            </div>
          </div>
          <button className="reg-btn">Все новости</button>
        </div>
      </section>
    );
  }
}

export default News;
