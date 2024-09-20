import "./App.css";
import Product from "./components/Product";
import SingleProduct from "./components/SingleProduct";
import ErrorPage from "./components/ErrorPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/products" element={<Product />} />
      <Route path="/products/:id" element={<SingleProduct />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
