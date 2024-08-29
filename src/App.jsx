import React from "react";
import Header from "./Pages/Header/Header";
import ScrollToTop from "./Functions/ScrollToTop/Scroll";
import Footer from "./Pages/Footer/Footer";
import Routes from "./Routes/RouteFiles";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}
