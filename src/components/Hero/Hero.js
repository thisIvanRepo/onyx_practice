import React from "react";
import "./Hero.css";
import { Container, Section } from "../utils/SectionContainer";

function Hero() {
  return (
    <Section className="section-hero" id="home">
      <Container>
        <div className="wrapper-content">
          <h1 className="hero-title title">
            <span className="highlight-text">Hairstyle</span> Reflects The
            Personality Inside You
          </h1>
          <p className="content content-hero">
            It is a long established fact that a reader will be the readable
            content of a page when looking at its layout.
          </p>
          <button className="my-btn btn-hero">Get Started</button>
        </div>
      </Container>
    </Section>
  );
}

export default Hero;
