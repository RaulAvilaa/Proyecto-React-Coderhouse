import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Navbar/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartView from './components/CartView/CartView'

function App() {


  return (
    <CartProvider>

      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/productos/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<CartView />} />
              <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App