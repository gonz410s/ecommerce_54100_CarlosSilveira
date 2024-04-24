// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartPage from './components/CartPage/CartPage';
import { CartProvider } from './components/CartContext/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/tienda" element={<ItemListContainer />} />
          <Route exact path="/h_manuales" element={<HerramientasManuales />} />
          <Route exact path="/h_electricas" element={<HerramientasElectricas />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

function Home() {
  return <h1>Inicio</h1>;
}

function HerramientasManuales() {
  return <h1>Herramientas Manuales</h1>;
}

function HerramientasElectricas() {
  return <h1>Herramientas Eléctricas</h1>;
}

export default App;