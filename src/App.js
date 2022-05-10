import { Routes, Route } from "react-router-dom";
import MyAccount from "./components/MyAccount";
import ProductsAdmin from "./components/ProductsAdmin";
import AddNewProduct from "./pages/AddNewProduct";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import { commerce } from "./lib/commerce";
import { useEffect, useState } from "react";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Routes>
      <Route exact path="/" element={<HomePage products={products} />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/my-account" element={<MyAccount />}>
        <Route path="" element={<ProductsAdmin />} />
        <Route path="add-new-product" element={<AddNewProduct />} />
      </Route>
      <Route path="/product/:productId" element={<ProductDetailsPage />} />
    </Routes>
  );
}

export default App;
