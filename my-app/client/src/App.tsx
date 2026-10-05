import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Cart from './components/Cart';

import { CartProvider } from './context/CartContext';

import './App.css';

export default function App() {
  return (
    <CartProvider>

      <div className="page">

        <Header />

        <Menu />

        <main className="page-content">
          <Outlet />
        </main>

        <Footer />

        <Cart />

      </div>

    </CartProvider>
  );
}