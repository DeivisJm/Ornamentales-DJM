import React from "react";
import "../styles/footer.css"; // Estilos opcionales

const Footer = () => {
  return (
    <footer className="footer text-center py-4 mt-5 bg-light">
      <p className="mb-0 text-muted">
        © {new Date().getFullYear()} Ornamentales DJM. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export default Footer;
