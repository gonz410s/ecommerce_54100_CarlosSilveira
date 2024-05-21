import React, { useState, useEffect } from 'react';
import "./Tienda.css";

function Tienda() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading">Cargando...</div>;
  }

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Bienvenido a Gonzo Store</h1>
        <p>
          En Gonzo Store nos especializamos en ofrecerte una amplia variedad de productos de calidad.
        </p>
        <p>
          Nuestro catálogo incluye herramientas manuales, herramientas eléctricas y más, todo diseñado
          para ayudarte en tus proyectos y necesidades del hogar.
        </p>
      </div>
    </div>
  );
}

export default Tienda;
