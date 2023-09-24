import React, { Component } from "react";
import logo from "../../assets/images/logo.svg";
import sun from "../../assets/images/light-mode.svg";
import moon from "../../assets/images/dark-mode.svg";

import "./header.scss";

export class Header extends Component {
  state = {
    toggle: false,
    dark: false,
    dropdown: false,
  };

  render() {
    const { toggle, dark, dropdown } = this.state;

    const modeSwitch = () => {
      this.setState({ dark: !dark });
      const r = document.querySelector(":root");

      if (!dark) {
        r.style.setProperty("--text-color", "#fff");
        r.style.setProperty("--main-bg-clr", "#040020");
      } else {
        r.style.setProperty("--text-color", "#2c2d2e");
        r.style.setProperty("--main-bg-clr", "#fff");
      }
    };
    const openToggle = () => {
      this.setState({ toggle: !toggle });
    };
    const openDropdown = () => {
      this.setState({ dropdown: !dropdown });
    };

    return (
      <header className="header">
        <div className="container">
          <div className="header__box">
            <img src={logo} className="logo" alt="Lean Group logo" />
            <ul className="header__list">
              <li className="header__item" onClick={openToggle}>
                Продукция
              </li>
              <li>
                <a className="header__item" href="Сертификаты">
                  Сертификаты
                </a>
              </li>
              <li>
                <a className="header__item" href="Наша команда">
                  Наша команда
                </a>
              </li>
              <li>
                <a className="header__item" href="О нас">
                  О нас
                </a>
              </li>
              <li>
                <a className="header__item" href="Новости">
                  Новости
                </a>
              </li>
              <li>
                <a className="header__item" href="Вакансии">
                  Вакансии
                </a>
              </li>
              <li>
                <a
                  style={{ border: "none" }}
                  className="header__item"
                  href="Контакты"
                >
                  Контакты
                </a>
              </li>
            </ul>

            <ul className={`dropdown__list ${dropdown ? "toggle-show" : ""}`}>
              <li className="header__item" onClick={openToggle}>
                Продукция
              </li>
              <li>
                <a className="header__item" href="Сертификаты">
                  Сертификаты
                </a>
              </li>
              <li>
                <a className="header__item" href="Наша команда">
                  Наша команда
                </a>
              </li>
              <li>
                <a className="header__item" href="О нас">
                  О нас
                </a>
              </li>
              <li>
                <a className="header__item" href="Новости">
                  Новости
                </a>
              </li>
              <li>
                <a className="header__item" href="Вакансии">
                  Вакансии
                </a>
              </li>
              <li>
                <a className="header__item" href="Контакты">
                  Контакты
                </a>
              </li>
              <li>
                <div className="dropdown-mode-switcher">
                  <img
                    className="sun"
                    onClick={modeSwitch}
                    src={dark ? sun : moon}
                    alt="light mode sun"
                  />
                </div>
              </li>
            </ul>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              onClick={openDropdown}
              fill={dark ? "white" : "black"}
              viewBox="0 0 16 16"
              className="dropdownBtn"
            >
              <path
                fillRule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>

            <div className="mode-switcher">
              <img
                className="sun"
                onClick={modeSwitch}
                src={dark ? sun : moon}
                alt="light mode sun"
              />
            </div>

            <div className={`toggle ${toggle ? "toggle-show" : ""}`}>
              <ul className="toggle__list">
                <li>
                  <a className="header__item toggle__item" href="#d">
                    Ламинатные тубы
                  </a>
                </li>
                <li>
                  <a className="header__item toggle__item" href="#d">
                    Экструзионные тубы
                  </a>
                </li>
                <li>
                  <a className="header__item toggle__item" href="#d">
                    Другая упаковка
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
