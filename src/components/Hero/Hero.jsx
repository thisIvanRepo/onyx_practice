import React from "react";
import "./Hero.css";
import { Container, Section } from "../utils/SectionContainer";

function Hero() {
  const handleButtonClick = () => {
    const targetSection = document.querySelector(".section-services");
    if (targetSection) {
      targetSection.scrollIntoView();
    }
  };
  
  return (
    <Section className="section-hero" id="home">
      <Container>
        <div className="hero-blok">
          <h1 className="hero-title title">
            <span className="highlight-text">Hairstyle</span> Reflects The
            Personality Inside You
          </h1>
          <p className="content content-hero">
            It is a long established fact that a reader will be the readable
            content of a page when looking at its layout.
          </p>
          <button
            className="my-btn btn-hero"
            onClick={handleButtonClick}
          >
            Get Started
          </button>
        </div>
      </Container>
      <div className="section-hero__img" />
    </Section>
  );
}

export default Hero;
