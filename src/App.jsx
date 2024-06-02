import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import NavbarGonzo from './components/Navbar/NavbarGonzo';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartPage from './components/CartPage/CartPage';
import Tienda from "./components/Tienda/Tienda";
import { CartProvider } from './components/CartContext/CartContext';
import InvoiceSearchPage from './components/InvoiceComponents/InvoiceSearchPage';
import InvoiceSearchResult from './components/InvoiceComponents/InvoiceSearchResult';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <NavbarGonzo/>
        <Routes>
          <Route exact path="/" element={<Navigate to="/Tienda" />} />
          <Route exact path="/Tienda" element={<Tienda/>} />
          <Route exact path="/category/tools" element={<ItemListContainer/>} />
          <Route exact path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route exact path="/detail/:idSingular" element={<ItemDetailContainer />} />
          <Route exact path="/cart" element={<CartPage />} />
          <Route exact path="/search-invoices" element={<InvoiceSearchPage />} />
          <Route exact path="/search-result/:searchType/:searchValue" element={<InvoiceSearchResult />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
