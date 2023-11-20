import React, { useEffect, useState } from "react";
import axios from "axios";

import { createContext } from "react";
const ProductsContext = createContext();

export const ContextProvider = (props) => {
  const { children } = props;
  const [products, setProducts] = useState([]);

  let getproducts = () => {
    axios
      .get("  http://localhost:4000/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getproducts();
  }, []);

  let ContextValue = { products, setProducts, getproducts };
  return (
    <ProductsContext.Provider value={ContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
