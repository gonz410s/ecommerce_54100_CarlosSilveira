import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NavbarGonzo from './components/Navbar/NavbarGonzo';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartPage from './components/CartPage/CartPage';
import Tienda from "./components/Tienda/Tienda";
import { CartProvider } from './components/CartContext/CartContext';


function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <NavbarGonzo/>
        <Routes>
          <Route exact path="/Tienda" element={<Tienda/>} />
          <Route exact path="/category/tools" element={<ItemListContainer/>} />
          <Route exact path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route exact path="/detail/:idSingular" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartPage />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
