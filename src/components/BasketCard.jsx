import { useCart } from "../context/CartContext";
import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";
import styles from "./BasketCard.module.css";

function BasketCard({ data }) {
  const [state, dispatch] = useCart();
  const { id, title, image, quantity } = data;
  const clickHandler = (type, payload) => {
    dispatch({ type, payload });
  };

  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <p>{shortenText(title)}</p>
      <div className={styles.actions}>
        {quantity === 1 && (
          <button onClick={() => clickHandler("REMOVE_ITEM", data)}>
            <MdDeleteOutline />
          </button>
        )}
        {quantity > 1 && <button onClick={() => clickHandler("DECREASE", data)}>-</button>}
        <span>{quantity}</span>
        <button onClick={() => clickHandler("INCREASE", data)}>+</button>
      </div>
    </div>
  );
}

export default BasketCard;
