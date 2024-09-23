import { TbChecklist } from "react-icons/tb";
import { FaHashtag } from "react-icons/fa";
import { BsPatchCheck } from "react-icons/bs";
import { useCart } from "../context/CartContext";

import styles from "./BasketSidebar.module.css";

function BasketSidebar() {
  const [state, dispatch] = useCart();
  console.log(state);

  return (
    <div className={styles.sidebar}>
      <div>
        <div>
          <TbChecklist />
          <p>Total:</p>
          <span>{state.total} $</span>
        </div>
        <div>
          <FaHashtag />
          <p>Quantity:</p>
          <span>{state.itemsCounter}</span>
        </div>
        <div>
          <BsPatchCheck />
          <p>Status:</p>
          <span>{!state.checkout && "Pending..."}</span>
        </div>
      </div>
      <button onClick={() => dispatch({ type: "CHECKOUT", payload: null })}>checkout</button>
    </div>
  );
}

export default BasketSidebar;
