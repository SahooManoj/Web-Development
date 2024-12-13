import { useState } from "react";
import "../ItemCard.css";

export default function ItemCard({ src, title, name, description, price, cartItemCount, setCartItemCount }) {
  const [itemCount, setItemCount] = useState(0);
  function decrementItem() {
    if (itemCount > 0) {
      setItemCount(itemCount - 1);
    }
  }
  function incrementItem() {
    setItemCount(itemCount + 1);
  }
  function setCartTotalCount() {
    setCartItemCount(cartItemCount + itemCount);
  }
  return (
    <div className="item">
      <img src={src} alt={title} height="100px" width="100px" />
      <p>{name}</p>
      <p>{description}</p>
      <p>{price}</p>
      <div className="controls">
        <button type="button" onClick={decrementItem}>-</button>
        <p>{itemCount}</p>
        <button type="button" onClick={incrementItem}>+</button>
      </div>
      <button type="button" onClick={setCartTotalCount}>Add to Cart</button>
    </div>
  );
};
