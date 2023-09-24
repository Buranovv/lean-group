import { Component } from "react";
import Layout from "../components/layouts/Layout";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Certificates from "../components/certificates/Certificates";
import Products from "../components/products/Products";
import Info from "../components/info/Info";
import Team from "../components/ourTeam/Team";
import News from "../components/news/News";

export class HomePage extends Component {
  render() {
    return (
      <Layout>
        <main>
          <Hero />
          <About />
          <Certificates />
          <Products />
          <Info />
          <Team />
          <News />
        </main>
      </Layout>
    );
  }
}

export default HomePage;
