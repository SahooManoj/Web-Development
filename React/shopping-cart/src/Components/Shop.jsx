import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import "../Shop.css";
import { useOutletContext } from "react-router-dom";

export default function Shop() {
  const [item, setItem] = useState();
  const [cartItemCount, setCartItemCount] = useOutletContext();

  useEffect(() => {
    async function getItem(limit) {
      const uri = `https://fakestoreapi.com/products?limit=${limit}`;
      const fetched = await fetch(uri);
      const json = await fetched.json();
      setItem(json);
    }
    getItem(5);
  }, []);
  return <div className="items">
    {item === undefined ? <p>Loading...</p> : item.map((value) => (
      <ItemCard
        src={value.image}
        title={value.title}
        name={value.title}
        description={value.description}
        price={value.price}
        cartItemCount={cartItemCount}
        setCartItemCount={setCartItemCount}
      />
    )
    )}
  </div>;
}
