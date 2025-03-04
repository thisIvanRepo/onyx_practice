import React from "react";
import "./Gallery.css";
import { Container, Section } from "../utils/SectionContainer";

import img1 from "../../images/gallery/obj_1.jpg";
import img2 from "../../images/gallery/obj_2.jpg";
import img3 from "../../images/gallery/obj_3.jpg";
import img4 from "../../images/gallery/obj_4.jpg";
import img5 from "../../images/gallery/obj_5.jpg";
import img6 from "../../images/gallery/obj_6.jpg";

const gallery = [img1, img2, img3, img4, img5, img6];

function Gallery() {
  return (
    <Section className="section-gallery" id="gallery">
      <Container className="gallery-container">
        <div className="gallery-block">
          <h2 className="title gallery-title">
            Our <span className="highlight-text"> Gallery</span>
          </h2>
          <ul className="gallery-list">
            {gallery.map((image, index) => (
              <li key={index} className="gallery-item">
                <div
                  className="gallery-img"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </li>
            ))}
          </ul>
          <button className="my-btn gallery-btn">View all</button>
        </div>
      </Container>
    </Section>
  );
}

export default Gallery;
