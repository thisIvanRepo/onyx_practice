import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import ProjectTitle from './components/ProjectTitle/ProjectTitle';
import DescriptionProject from './components/DescriptionProject/DescriptionProject';
import Author from './components/Author/Author';

function App() {
  return (
    <div className="App">
      <ProjectTitle />
      <DescriptionProject />
      <Header />
      <Author />
    </div>
  );
}

export default App;