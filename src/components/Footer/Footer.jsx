import React from "react";
import "./Footer.css";
import { Container, Section } from "../utils/SectionContainer";
import icon from "../../images/icons.svg";

const networks = [
  { name: "facebook", url: `${icon}#icon-facebook` },
  { name: "twitter", url: `${icon}#icon-twitter` },
  { name: "google", url: `${icon}#icon-google` }
];

function Footer() {

  return (
    <Section className="section-footer" id="footer">
      <Container className="footer-container">
        <div className="footer-block">
          <div className="wrapper-logo wrapper-logo-footer">
            <a href="../index.html" className="logo logo-footer">
              <svg className="logo-svg logo-svg-footer" width="100" height="100">
                <use href={`${icon}#icon-scissors-1`}></use>
              </svg>
              arber
            </a>
          </div>
          <p className="content footer-content">
            It is a long established fact that a reader will be
            distracted by the readable
          </p>
          <ul className="social-list">
            {networks.map(({name, url}) => (
                <li key={name} className="social-item">
                  <a href="#home" className="social-link">
                    <svg width="30" height="30">
                      <use href={url}/>
                    </svg>
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default Footer;
