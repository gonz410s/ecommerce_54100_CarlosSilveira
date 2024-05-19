
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import BriefPage from './components/BriefPage/BriefPage';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
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
          <Route exact path="/" element={<ItemListContainer saludo="Nuestra Tienda" />} />
          <Route exact path="/category/:idCategory" element={<ItemListContainer saludo="Nuestra Tienda"/>} />
          <Route exact path="/detail/:idProduct" element={<ItemDetailContainer/>} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/brief" element={<BriefPage/>} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}



export default App;