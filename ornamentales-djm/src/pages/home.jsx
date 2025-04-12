import React, { useEffect } from "react";
import "../styles/home.css";
import { Link } from "react-router-dom";
import crotonPetra from "../assets/crotonPetra.png";
import crotonIceton from "../assets/iceton.png";
import shefflera from "../assets/shefflera.png";
import pleomelle from "../assets/pleomelle.png";

const Home = () => {
  return (
    <div className="container text-center my-5">
      <div data-aos="fade-up">
        <h2 className="mb-4 text-success">Nuestras Plantas</h2>
      </div>

      <div className="row">

        {/* CROTON PETRA */}
        <div className="col-md-4 mb-4" data-aos="zoom-in">
          <div className="card h-100 shadow-sm">
            <img src={crotonPetra} className="card-img-top" alt="Croton Petra" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Croton Petra</h5>
              <p className="card-text">
                Planta vibrante con gran variedad de colores, ideal para interiores luminosos.
              </p>
              <Link to="/croton-petra" className="btn btn-outline-success mt-2">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* CROTON ICETON */}
        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="150">
          <div className="card h-100 shadow-sm">
            <img src={crotonIceton} className="card-img-top" alt="Croton Iceton" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Iceton</h5>
              <p className="card-text">
                Fácil de cuidar y resistente, ideal para ambientes de oficina y hogar.
              </p>
              <Link to="/croton-petra" className="btn btn-outline-success mt-2">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* SHEFFLERA */}
        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="card h-100 shadow-sm">
            <img src={shefflera} className="card-img-top" alt="Shefflera" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Shefflera</h5>
              <p className="card-text">
                Follaje elegante y abundante, gran variedad de tamaños, perfecta para espacios frescos.
              </p>
              <Link to="/croton-petra" className="btn btn-outline-success mt-2">
                Leer más
              </Link>
            </div>
          </div>
        </div>

        {/* PLEOMELLE */}
        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="450">
          <div className="card h-100 shadow-sm">
            <img src={pleomelle} className="card-img-top" alt="Pleomelle" loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">Pleomelle</h5>
              <p className="card-text">
                Follaje exótico de textura suave, ideal para interiores luminosos o jardines protegidos.
              </p>
              <Link to="/pleomelle" className="btn btn-outline-success mt-2">
                Leer más
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
