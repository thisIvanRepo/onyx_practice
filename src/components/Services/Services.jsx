import React from "react";
import "./Services.css";
import icons from "../../images/icons.svg";
import { Container, Section } from "../utils/SectionContainer";

const services = [
  { name: "Haircut", icon: `${icons}#icon-scissors` },
  { name: "Beard Cut", icon: `${icons}#icon-trimer` },
  { name: "Facial Pack", icon: `${icons}#icon-cleanser` },
];

function Services() {
  return (
    <Section className="section-services" id="services">
      <Container className="services-container">
        <h2 className="title services-title">
          Services We<span className="highlight-text">Provide</span>
        </h2>
        <ul className="services-list">
          {services.map(({ name, icon }, index) => (
            <li key={index} className="service-item">
              <div className="container-service-icon">
                <svg
                  className="service-icon"
                  width="40"
                  height="40"
                  // I didn't find any ideas on how to fix the trimmer's SVG.
                >
                  <use href={icon}></use>
                </svg>
              </div>
              <h3 className="service-name">{name}</h3>
              <p className="content service-description">
                long established fact that a reacted by the readable content of
                hen looking at.
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}

export default Services;
