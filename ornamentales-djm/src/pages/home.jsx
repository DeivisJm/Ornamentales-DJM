import React, { useEffect } from "react";
import "../styles/home.css";
import crotonPetra from "../assets/croton-petra.png";
import crotonIceton from "../assets/iceton.png";
import shefflera from "../assets/shefflera.png";


const Home = () => {
  
  return (
    <div className="container text-center my-5">
      <div data-aos="fade-up">
        <h2 className="mb-4 text-success">Nuestras Plantas</h2>
      </div>

      <div className="row">
        <div className="col-md-4 mb-4" data-aos="zoom-in">
          <div className="card h-100 shadow-sm">
            <img src={crotonPetra} className="card-img-top" alt="Croton Petra" />
            <div className="card-body">
              <h5 className="card-title">Croton Petra</h5>
              <p className="card-text">
                Planta vibrante con gran variedad de colores y tamaños, ideal para interiores luminosos
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="150">
          <div className="card h-100 shadow-sm">
            <img src={crotonIceton} className="card-img-top" alt="Croton Iceton" />
            <div className="card-body">
              <h5 className="card-title">Iceton</h5>
              <p className="card-text">
                Fácil de cuidar y resistente, ideal para ambientes de oficina y hogar, gran variedad de tamaños
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay="300">
          <div className="card h-100 shadow-sm">
            <img src={shefflera} className="card-img-top" alt="Shefflera" />
            <div className="card-body">
              <h5 className="card-title">Shefflera</h5>
              <p className="card-text">
                Follaje elegante y abundante, gran variedad de tamaños, perfecta para espacios amplios y frescos
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
