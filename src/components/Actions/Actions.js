import React, { useState, useEffect } from "react";
import "./Actions.css";
import * as basicLightbox from "basiclightbox";
import icons from "../../images/icons.svg";

function Actions() {
  const [notificationCount, setNotificationCount] = useState(0);
  const [modalElement, setModalInstance] = useState(null);

  useEffect(() => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
      setNotificationCount((count) => count + 1);
      if (modalElement) {
        modalElement.close();
      }
    };

    document.addEventListener("submit", handleFormSubmit);

    return () => {
      document.removeEventListener("submit", handleFormSubmit);
    };
  }, [modalElement]);

  const openRegisterForm = () => {
    const newEl = basicLightbox.create(`
      <div class="modal">
        <h2>Register</h2>
        <form class="form_modal">
          <!-- form registration -->
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button class="my-btn btn-modal-form" type="submit">Register</button>
        </form>
      </div>
    `);
    newEl.show();
  };

  const openAppointmentForm = () => {
    const newEl = basicLightbox.create(`
      <div class="modal">
        <h2 class="title_modal">Appointment</h2>
        <form class="form_modal">
          <!-- form appointment -->
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Date" />
          <button class="my-btn btn-modal-form" type="submit">Book</button>
        </form>
      </div>
    `);
    setModalInstance(newEl);
    newEl.show();
  };

  return (
    <div className="actions">
      <a
        href="#register"
        className="action-icon register link"
        onClick={openRegisterForm}
      >
        <svg className="icon" width="24" height="24">
          <use href={`${icons}#icon-profile`}></use>
        </svg>
      </a>
      <a
        href="#notifications"
        className="action-icon notifications link"
      >
        <svg className="icon" width="24" height="24">
          <use href={`${icons}#icon-notification`}></use>
        </svg>
        <svg className="icon" width="10" height="5">
          <use href={`${icons}#icon-bells`}></use>
        </svg>
        {notificationCount > 0 && (
          <span className="notification-count">{notificationCount}</span>
        )}
      </a>
      <button className="my-btn action-button" onClick={openAppointmentForm}>
        Appointment
      </button>
    </div>
  );
}

export default Actions;
