import BasketCard from "../components/BasketCard";
import { useCart } from "../context/CartContext";
function CheckoutPage() {
  const [state, dispatch] = useCart();
  return (
    <div>
      <div>
        {state.selectedItems.length === 0 && <div>empty</div>}
        {state.selectedItems.map((product) => (
          <BasketCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;
