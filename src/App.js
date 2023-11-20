import "./App.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense, useState } from "react";

const Sidbar = lazy(() => import("./Components/Sidbar"));
const Products = lazy(() => import("./Components/Products"));
const Home = lazy(() => import("./Components/Home"));
const Addproduct = lazy(() => import("./Components/Addproduct"));
const ProductDetailes = lazy(() => import("./Components/ProductDetailes"));
const Updateproduct = lazy(() => import("./Components/Updateproduct"));
const Navbar = lazy(() => import("./Components/Navbar"));
// const MainContent = lazy(() => import("./Components/MainContent"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div
            className="spinner-grow text-success spinner-grow-lg"
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Navbar />

      <div className="row m-0">
        <div className="col-3 bg-dark">
          <Sidbar />
        </div>
        <div className="col-9">
          <Routes>
            {["home", "/"].map((path, index) => (
              <Route path={path} element={<Home />} key={index} />
            ))}
            <Route path="products" element={<Products />} />
            <Route path="products/addproduct" element={<Addproduct />} />
            <Route path="products/:productId" element={<ProductDetailes />} />
            <Route
              path="products/updateproduct/:productId"
              element={<Updateproduct />}
            />
          </Routes>
        </div>
      </div>
    </Suspense>
  );
}

export default App;
