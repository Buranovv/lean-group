import React, { Component } from "react";

import logo from "../../assets/images/logo.svg";
import vk from "../../assets/images/vk.svg";
import fk from "../../assets/images/fb.svg";
import linkedin from "../../assets/images/linkedin.svg";

import "./footer.scss";

export const blank = "_blank";
export class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="top-foot">
            <img src={logo} alt="logo" />
            <div className="social">
              <a target="blank" href="https://www.vk.com">
                <img src={vk} alt="vk" />
              </a>
              <a target={blank} href="https://www.facebook.com">
                <img src={fk} alt="facebook" />
              </a>
              <a target={blank} href="https://uz.linkedin.com/">
                <img src={linkedin} alt="linkedin" />
              </a>
            </div>
          </div>
          <hr />

          <div className="footer-lists">
            <div className="foot-links">
              <ul className="links-list">
                <li className="list-title">Продукция</li>
                <li>
                  <a href="s" className="links-item">
                    Ламинатные тубы
                  </a>
                </li>
                <li>
                  <a href="s" className="links-item">
                    Экструзионные тубы
                  </a>
                </li>
                <li>
                  <a href="s" className="links-item">
                    Другая упаковка
                  </a>
                </li>
              </ul>
              <ul className="links-list">
                <li className="list-title">Компания</li>
                <li>
                  <a href="s" className="links-item">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="s" className="links-item">
                    Наша команда
                  </a>
                </li>
                <li>
                  <a href="s" className="links-item">
                    Сертификаты
                  </a>
                </li>
              </ul>
              <ul className="links-list">
                <li className="list-title">Разделы</li>
                <li>
                  <a href="s" className="links-item">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="s" className="links-item">
                    Новости
                  </a>
                </li>
                <li>
                  <a href="s" className="links-item">
                    Вакансии
                  </a>
                </li>
              </ul>
            </div>
            <div className="contact-lists">
              <ul className="contact-list">
                <li className="contact-title">Беларусь</li>
                <li className="contact-item">+375 (17) 270 53 77</li>
                <li className="contact-item">+375 (17) 270 53 78</li>
              </ul>
              <ul className="contact-list">
                <li className="contact-title">Европа</li>
                <li className="contact-item">+48 73 1111 044</li>
              </ul>
              <ul className="contact-list">
                <li className="contact-title">Москва</li>
                <li className="contact-item">+7 (495) 280 73 44</li>
                <li className="contact-item">+7 (495) 280 73 44</li>
              </ul>
              <ul className="contact-list">
                <li className="contact-title">Екатеринбург</li>
                <li className="contact-item">+7 (343) 346 82 06</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
