import "./App.scss";
import {useState} from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import CartPage from "./pages/CartPage/CartPage";
import ShopContextProvider from "./context/shop-context";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  return (
    <ShopContextProvider>
    <BrowserRouter>
      <Header setSearchItem={setSearchItem} setSelectedFilter={setSelectedFilter} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/products" 
          element={<ProductsPage searchItem={searchItem} setSearchItem={setSearchItem} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />} 
        />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
