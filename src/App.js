import React, { useState, useEffect } from "react";
import logo from "./logo.svg";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
import routes from "./routes";
// import Placeholder from "./components/Placeholder";

function App(props) {
  console.log(props);
  const [theme, setTheme] = useState("theme-night");
  const changeTheme = () => {
    let currentTheme = theme;
    let nextTheme = "";
    theme === "theme-night"
      ? (nextTheme = "theme-day")
      : (nextTheme = "theme-night");
    setTheme(nextTheme);
  };
  return (
    <div className={`App ${theme}`}>
      <div className="App__ThemeIcon-Container">
        <div onClick={changeTheme} className={`App__ThemeIcon ${theme}`} />
      </div>
      {/* <Placeholder/> */}
      <Header />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
