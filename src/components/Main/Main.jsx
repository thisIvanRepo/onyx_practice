import React from "react";
import "./Main.css";
import Hero from "../Hero/Hero";
import History from "../History/History";
import Services from "../Services/Services";

function Main() {
  return (
    <>
      <Hero />
      <History
        modalTitle="Barbershop History"
        modalContent="Oh, that's all! It's a very long story..."
      />
      <Services />
    </>
  );
}

export default Main;
