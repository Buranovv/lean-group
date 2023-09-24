import React, { Component, Fragment } from "react";
import Header from "../header/Header";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        {this.props.children}
      </Fragment>
    );
  }
}

export default Layout;
