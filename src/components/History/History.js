import React, { useState } from "react";
import "./History.css";
import "../../images/History.jpg";
import { Container, Section } from "../utils/SectionContainer";

function History() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Section className="section-history" id="history">
      <Container className="history-container">
        <div className="history-block">
          <h2 className="title history-title">Our <span className="highlight-text">History</span></h2>
          <p className="content history-content">
            It is a long established fact that a reader will be distracted by the readable content of a page w hen looking at.
          </p>
          <p className="content history-content">
            It is a long established fact that a reader will be distracted by the readable content of a page w hen looking at.
          </p>
          <button className="my-btn" onClick={openModal}>Learn more</button>
        </div>

        {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content">
            <h2 className="title">Barbershop History</h2>
            <p className="content">
              Oh, that's all!
              It's a very long story...
            </p>
          </div>
        </div>
      )}
      </Container>
    </Section>
  );
}

export default History;
