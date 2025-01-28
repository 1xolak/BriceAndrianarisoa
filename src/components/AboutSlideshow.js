// src/components/AboutSlideshow.js
import React, { useState, useEffect } from "react";
import "./AboutSlideshow.css";

const slides = [
  "blablabla",
  "Je conçois des solutions performantes et responsives pour améliorer l'expérience utilisateur.",
  "J'ai travaillé sur des projets variés allant de sites web statiques à des applications mobiles complexes.",
  "Mon objectif ? Créer des produits modernes, scalables et maintenables pour répondre aux besoins des utilisateurs."
];

function AboutSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 50; // Vitesse de saisie pour chaque lettre
  const slideInterval = 3000; // Durée d'affichage de chaque diapositive avant de passer à la suivante

  useEffect(() => {
    let charIndex = 0;
    setDisplayedText("");

    const typeInterval = setInterval(() => {
      if (charIndex < slides[currentSlide].length) {
        setDisplayedText((prev) => prev + slides[currentSlide][charIndex]);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, slideInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typeInterval); // Nettoie l'intervalle lors de la fin du cycle de vie
  }, [currentSlide]);

  return (
    <div className="slideshow-container">
      <div className="slide">{displayedText}</div>
    </div>
  );
}

export default AboutSlideshow;
