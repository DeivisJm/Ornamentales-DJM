import React from "react";
import crotonPetra from "../assets/crotonPetra.png";

const CrotonPetra = () => {
  return (
    <div className="container my-5" data-aos="fade-up">
      <h2 className="text-success mb-4">Croton Petra (Codiaeum variegatum)</h2>

      <p className="lead">
        El <strong>Croton Petra</strong> es una planta tropical muy apreciada por su espectacular follaje multicolor. Ideal para interiores luminosos o jardines tropicales, es resistente, fácil de cuidar y perfecta para decorar espacios con estilo.
      </p>

      <h4 className="mt-5">Disponibilidad por tamaño:</h4>
      <ul className="list-group list-group-flush mb-4 text-start">
        <li className="list-group-item">• 1 pie <span className="text-muted">(30 cm)</span></li>
        <li className="list-group-item">• 1.5 pies <span className="text-muted">(45 cm)</span></li>
        <li className="list-group-item">• 2 pies <span className="text-muted">(60 cm)</span></li>
        <li className="list-group-item">• 3 pies <span className="text-muted">(91 cm)</span></li>
        <li className="list-group-item">• 4 pies <span className="text-muted">(122 cm)</span></li>
        <li className="list-group-item">• 5 pies <span className="text-muted">(152 cm)</span></li>
        <li className="list-group-item">• 6 pies <span className="text-muted">(183 cm)</span></li>
      </ul>

      <img
        src={crotonPetra}
        alt="Croton Petra"
        className="img-fluid rounded shadow-sm mb-4"
        style={{ maxHeight: "400px", objectFit: "contain" }}
      />
    </div>
  );
};

export default CrotonPetra;
