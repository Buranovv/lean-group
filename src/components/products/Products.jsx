import { Component } from "react";

import img1 from "../../assets/images/1.png";
import img2 from "../../assets/images/2.png";
import img3 from "../../assets/images/3.png";
import img4 from "../../assets/images/4.png";
import img5 from "../../assets/images/5.png";

import "./products.scss";

export class Products extends Component {
  state = {
    tab1: false,
    tab2: true,
    tab3: false,
  };

  render() {
    let { tab1, tab2, tab3 } = this.state;
    const openTab1 = () => {
      this.setState({ tab1: true });

      this.setState({ tab2: false });
      this.setState({ tab3: false });
    };
    const openTab2 = () => {
      this.setState({ tab2: true });

      this.setState({ tab1: false });
      this.setState({ tab3: false });
    };
    const openTab3 = () => {
      this.setState({ tab3: true });

      this.setState({ tab2: false });
      this.setState({ tab1: false });
    };
    return (
      <section className="products">
        <div className="container">
          <h2 className="regular-title">
            Наша <span className="reg-title-span">продукция</span>
          </h2>
          <div className="tab-btns">
            <button
              className={`tab ${tab1 ? "tab-active" : ""}`}
              onClick={openTab1}
            >
              Ламинатные тубы
            </button>
            <button
              className={`tab ${tab2 ? "tab-active" : ""}`}
              onClick={openTab2}
            >
              Экструзионные тубы
            </button>
            <button
              className={`tab ${tab3 ? "tab-active" : ""}`}
              onClick={openTab3}
            >
              Другая упаковка
            </button>
          </div>
          <div className={`tab-body ${tab1 ? "show" : ""}`}>
            <img src={img1} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img4} alt="" />
            <img src={img5} alt="" />
          </div>
          <div className={`tab-body ${tab2 ? "show" : ""}`}>
            {" "}
            <img src={img5} alt="" />
            <img src={img1} alt="" />
            <img src={img4} alt="" />
            <img src={img2} alt="" />
            <img src={img3} alt="" />
          </div>
          <div className={`tab-body ${tab3 ? "show" : ""}`}>
            {" "}
            <img src={img2} alt="" />
            <img src={img3} alt="" />
            <img src={img5} alt="" />
            <img src={img1} alt="" />
            <img src={img4} alt="" />
          </div>
          <button className="reg-btn">Перейти в каталог</button>
        </div>
      </section>
    );
  }
}

export default Products;
