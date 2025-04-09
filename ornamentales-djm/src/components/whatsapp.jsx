import React from "react";
import "../styles/whatsapp.css";

const WhatsApp = () => {
  return (
    <a
      href="https://wa.me/50686649356?text=¡Hola!%20Estoy%20interesado%20en%20sus%20plantas%20ornamentales"
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        width="50"
        height="50"
      />
    </a>
  );
};

export default WhatsApp;
