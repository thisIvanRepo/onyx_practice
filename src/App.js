import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ProjectTitle from "./components/InitProject/ProjectTitle";
import DescriptionProject from "./components/InitProject/DescriptionProject";
import Author from "./components/InitProject/Author";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <ProjectTitle />
      <DescriptionProject />
      <Header />
      <Main />
      <Author />
    </div>
  );
}

export default App;
