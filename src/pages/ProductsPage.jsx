import React from "react";

import { useProducts } from "../context/ProductContext";

function ProductsPage() {
  const products = useProducts();
  return <div>ProductsPage</div>;
}

export default ProductsPage;
