import React, { useState } from "react";
import "./History.css";
import "../../images/History.jpg";
import { Container, Section } from "../utils/SectionContainer";

function History({ modalTitle, modalContent }) {
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
          <h2 className="title history-title">
            Our <span className="highlight-text">History</span>
          </h2>
          <p className="content history-content">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at.
          </p>
          <p className="content history-content">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at.
          </p>
          <button className="my-btn" onClick={openModal}>
            Learn more
          </button>
        </div>

        {isModalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content">
              <h2 className="title">{modalTitle}</h2>
              <p className="content">{modalContent}</p>
            </div>
          </div>
        )}
      </Container>
      <div className="section-history__img" />
    </Section>
  );
}

export default History;
