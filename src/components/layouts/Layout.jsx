import React, { Component, Fragment } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Backtop from "../backtop/Backtop";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Backtop />
        {this.props.children}
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
