import React, { useState, useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import { Link } from "react-router-dom";
import style from "../PagesStyle/checkOutPageStyle.module.css";

import GuestCheckoutOption from "../Components/CheckOut/checkoutOption/GuestCheckoutOption";
import CheckOut from "../Components/CheckOut/checkOut";

const CheckOutPage = () => {
  const { loggedIn } = useContext(CartContext);
  const [guestCheckOut, setGuestCheckout] = useState(false);

  return (
    <main className={style.checkout}>
      {guestCheckOut ? (
        <CheckOut />
      ) : loggedIn ? (
        <CheckOut />
      ) : (
        <>
          <section className={style.memberCheckout}>
            <Link to="/login">CHECKOUT AS MEMBER ? </Link>
          </section>
          <section>
            <GuestCheckoutOption setGuestCheckout={setGuestCheckout} />
          </section>
        </>
      )}
    </main>
  );
};

export default CheckOutPage;
