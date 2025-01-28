// src/App.js
import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Profil from "./components/Profil";
import "./App.css";



function App() {
  return (
    <div className="App">
      <Header />
    <div className="container">
      
        <div className="left-side">
          <h2>Profil</h2>

          <section id="Profil">
              <Profil />
            </section>
            
            <section id="contact">
              <Contact />
            </section>

        </div>

      <div className="right-side">
      <h2>Mes Projets</h2>
            <section id="projects">
              <Projects />
            </section>
      </div>
      </div>
    </div>
  );
}

//gallery







export default App;
