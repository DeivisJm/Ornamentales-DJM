import React from "react";
import pleomelle from "../assets/pleomelle.png";
import "../styles/home.css";

const Pleomelle = () => {
    return (
        <div className="container my-5">
            <h2 className="text-success">Pleomelle (Dracaena reflexa)</h2>
            <p className="lead">
                La <strong>Pleomelle</strong> es una planta tropical resistente y elegante con hojas largas y delgadas de color verde brillante. Es ideal para interiores modernos, oficinas o jardines tropicales. Su apariencia frondosa la convierte en una opción perfecta para decorar espacios con un toque de frescura natural.
            </p>

            <h4 className="mt-5">Disponibilidad por tamaño:</h4>
            <ul className="list-group list-group-flush mb-4">
                <li className="list-group-item">1 pie (30 cm)</li>
                <li className="list-group-item">1.5 pies (45 cm)</li>
                <li className="list-group-item">2 pies (60 cm)</li>
                <li className="list-group-item">3 pies (91 cm)</li>
                <li className="list-group-item">4 pies (122 cm)</li>
                <li className="list-group-item">5 pies (152 cm)</li>
                <li className="list-group-item">6 pies (183 cm)</li>
            </ul>


            <img
                src={pleomelle}
                alt="Pleomelle"
                className="img-fluid rounded shadow-sm mb-4"
                style={{ maxHeight: "400px", objectFit: "contain" }}
            />

        </div>
    );
};

export default Pleomelle;