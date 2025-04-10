import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Contact from "./pages/contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  useEffect(() => {
    AOS.refresh(); // ⬅️ refresca animaciones al cambiar de página
  }, [location]);

  return (
    <>
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

// Envolvés la App en Router como wrapper externo
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
