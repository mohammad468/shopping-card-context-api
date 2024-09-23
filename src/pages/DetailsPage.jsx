import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../context/ProductContext";
import Loader from "../components/Loader";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import styles from "./DetailsPage.module.css";

function DetailsPage() {
  const { id } = useParams();
  const product = useProduct(+id);
  if (!product) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={product.image} alt={product.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.description}>{product.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {product.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {product.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            back to shop
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
