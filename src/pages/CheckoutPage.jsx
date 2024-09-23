import BasketCard from "../components/BasketCard";
import BasketSidebar from "../components/BasketSidebar";
import { useCart } from "../context/CartContext";
import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const [state, dispatch] = useCart();
  return (
    <div className={styles.container}>
      <BasketSidebar />
      <div className={styles.products}>
        {state.selectedItems.length === 0 && <div>
          <h1>There is nothing to display in the shopping cart</h1>
          </div>}
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
