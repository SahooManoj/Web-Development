import { Link, Outlet } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '../Root.css';
import { Fragment, useState } from "react";

export default function Root() {
  const [cartItemCount, setCartItemCount] = useState(0);

  return (
    <Fragment>
      <div className="nav">
        <ul>
          <li>
            <i className="fa-solid fa-star"></i>
          </li>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"shop"}>Shopping</Link>
          </li>
          <li>
            <div className="cart">
              <i className="fa-solid fa-cart-shopping"></i>
              <p>{cartItemCount}</p>
            </div>
          </li>
        </ul>
      </div>
      <div className="child">
        <Outlet context={[cartItemCount, setCartItemCount]} />
      </div>
    </Fragment>
  );
}
