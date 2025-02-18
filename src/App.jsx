import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer"
import ProductsPage from './pages/ProductsPage/ProductsPage';
import ProductDetails from './pages/ProductDetails/ProductDetails';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/"  />
      <Route path="/products" element={<ProductsPage />}/>
      <Route path="/products/:id" element={<ProductDetails />} />
    </Routes>
<Footer />
    </BrowserRouter>
  )
}

export default App
