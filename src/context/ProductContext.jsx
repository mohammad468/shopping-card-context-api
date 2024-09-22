import { useContext, useEffect } from "react";
import { useState, createContext } from "react";

import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(await api.get("/products"));
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return <ProductContext.Provider value={products}>{children}</ProductContext.Provider>;
}

const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export { useProducts };
export default ProductsProvider;
