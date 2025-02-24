import React from "react";
import "./Actions.css";
import * as basicLightbox from "basiclightbox";
import "basiclightbox/dist/basicLightbox.min.css";
import icons from "../../images/icons.svg";

function Actions() {
  const openRegisterForm = () => {
    const instance = basicLightbox.create(`
      <div class="modal">
        <h2>Register</h2>
        <form>
          <!-- form registration -->
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">Register</button>
        </form>
      </div>
    `);
    instance.show();
  };

  const openAppointmentForm = () => {
    const instance = basicLightbox.create(`
      <div class="modal">
        <h2>Appointment</h2>
        <form>
          <!-- form appointment -->
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Date" />
          <button type="submit">Book</button>
        </form>
      </div>
    `);
    instance.show();
  };

  return (
    <div className="actions">
      <a
        href="#register"
        className="action-icon register link"
        onClick={openRegisterForm}
      >
        <svg
          className="icon"
          width="24"
          height="24"
        >
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
      </a>
      <button className="btn action-button" onClick={openAppointmentForm}>
        Appointment
      </button>
    </div>
  );
}

export default Actions;
