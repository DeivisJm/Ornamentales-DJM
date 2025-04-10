import React from "react";
import "../styles/contact.css";
import WhatsApp from "../components/whatsapp"; // 👈 Importás el componente aquí

const Contact = () => {
  return (
    <div className="container my-5">
      <div className="text-center mb-5" data-aos="fade-up">
        <h2 className="text-success">Contacto</h2>
        <p className="lead">Puede escribirnos a través de los siguientes medios:</p>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm p-4 mb-4" data-aos="fade-right">
            <ul className="list-unstyled text-start">
              <li><strong>Email:</strong> dsjmplantas@gmail.com</li>
              <li><strong>Teléfono:</strong> +506 8664-9356</li>
              <li><strong>Dirección:</strong> San Isidro, Peñas Blancas, San Ramón, Alajuela, Costa Rica</li>
            </ul>
          </div>

          <div className="map-responsive" data-aos="zoom-in" data-aos-delay="200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3924.4098529820476!2d-84.581707!3d10.388986!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa06df70515653f%3A0x7000f2f47b9ab31b!2sOrnamentales%20DJM!5e0!3m2!1ses-419!2scr!4v1744164392689!5m2!1ses-419!2scr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Ornamentales DJM"
            ></iframe>
          </div>
        </div>
      </div>

      <WhatsApp />
    </div>
  );
};

export default Contact;
