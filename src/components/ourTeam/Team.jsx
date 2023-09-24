import React, { Component } from "react";

import voyn from "../../assets/images/ds.png";
import ekat from "../../assets/images/cs.png";
import dmit from "../../assets/images/bs.png";
import evge from "../../assets/images/as.png";
import elen from "../../assets/images/ss.png";

import "./team.scss";

export class Team extends Component {
  render() {
    return (
      <section className="team">
        <div className="container">
          <h2 className="regular-title">
            Наша<span className="reg-title-span"> команда</span>
          </h2>
          <div className="cards">
            <div className="card">
              <div className="img-box">
                <img src={voyn} alt="Войнич Дарья" />
              </div>
              <div className="card-body">
                <h5 className="card-titl">Войнич Дарья</h5>
                <p className="card-text1">Заместитель директора по продажам</p>
                <p className="card-text2">+375 (17) 270-53-77 (317)</p>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img src={ekat} alt="Мисько Екатерина" />
              </div>
              <div className="card-body">
                <h5 className="card-titl">Мисько Екатерина</h5>
                <p className="card-text1">Начальник отдела сопровождения</p>
                <p className="card-text2">+375 (17) 270-53-77 (115)</p>
                <p className="card-text2"> +375 29 112-73-48</p>
                <p className="card-text2">k.melnichenko@leangroup.by</p>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img src={dmit} alt="Дмитроченко Дмитрий" />
              </div>
              <div className="card-body">
                <h5 className="card-titl">Дмитроченко Дмитрий</h5>
                <p className="card-text1">
                  Начальник отдела допечатной подготовки
                </p>
                <p className="card-text2">+375 (17) 270-53-77 (333)</p>
                <p className="card-text2">+375 29 360-32-26</p>
                <p className="card-text2">dmitrochenko@leangroup.by</p>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img src={evge} alt="Антух Евгений" />
              </div>
              <div className="card-body">
                <h5 className="card-titl">Антух Евгений</h5>
                <p className="card-text1">Начальник отдела снабжения</p>
                <p className="card-text2">+375 (17) 270-53-77 (148)</p>
                <p className="card-text2">+375 44 764-16-28</p>
                <p className="card-text2">j.antuh@leangroup.by</p>
              </div>
            </div>
            <div className="card">
              <div className="img-box">
                <img src={elen} alt="Мисник Елена" />
              </div>
              <div className="card-body">
                <h5 className="card-titl">Мисник Елена</h5>
                <p className="card-text1">Специалист по работе с клиентами</p>
                <p className="card-text2">+375 (17) 270-53-77 (322)</p>
                <p className="card-text2"> +375 29 329-34-03</p>
                <p className="card-text2">e.misnik@leangroup.by</p>
              </div>
            </div>
          </div>
          <button className="reg-btn">Наша команда</button>
        </div>
      </section>
    );
  }
}

export default Team;
