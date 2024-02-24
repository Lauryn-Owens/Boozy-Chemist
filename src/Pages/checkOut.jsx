import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../PagesStyle/checkOutPageStyle.module.css";

const CheckOutPage = () => {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;
  const state = GlobalState.state;

  //useState
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    cardname: "",
    cardNumber: "",
    expyear: "",
    cvv: ""
  });
  const onChangeHandler = (e) => {
    //object deconstructuring
    const { name, value } = e.target;
    setFormData((prev) => {
      /*...prev will return all previous properties
            and replace the property name value with the 
            current input value
            */
      return { ...prev, [name]: value };
    });
  };

  const location = useLocation();
  const cartTotal = location.state;

  const tax = 1.04;
  const shippingCost = 9.99;

  const totalWithTax = (total) => {
    return tax * total + shippingCost;
  };

  const navigate = useNavigate();
  const getCheckOutConfirmation = (e) => {
    /*if this was connected to a database, the formData 
        state object would be pushed to the database*/
    e.preventDefault();
    navigate("/checkOutConfirmation");
  };

  const fullTotal = totalWithTax(cartTotal);

  return (
    <>
      <div className={style.checkOutPageContainer}>
        <h1> Check Out</h1>
        {state.length === 0 && <h1>Total Cost: $0</h1>}
        <section className={style.totalCostDetails}>
          <table>
            <thead>
              <tr>
                <th>Class Name</th>
                <th>Class Price</th>
              </tr>
            </thead>
            <tbody>
              {state.map((currCartItem) => {
                return (
                  <tr key={currCartItem.id}>
                    <td>{currCartItem.classTitle}</td>
                    <td>
                      <span>{currCartItem.quantity}
                      &nbsp;
                      &#215;</span>
                      &nbsp;
                      <span className={style.currCartItemPrice}>
                      &nbsp;
                        $ {currCartItem.classPrice}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          {state.length > 0 && <h1>Total Cost: ${fullTotal}</h1>}
        </section>
        <section className={style.checkOutDetails}>
          <form onSubmit={getCheckOutConfirmation}>
            <section className={style.generalCustomerInformation}>
              <h3>Billing Address</h3>
              <label htmlFor="fullName">
                <i className="fa fa-user"></i> Full Name
              </label>
              <input
              required
              value="Isabelle Smith"
              type="text"
              id={style.fullName}
              name="fullName"
            />
              <label htmlFor="email">
                <i className="fa fa-envelope"></i> Email
              </label>
              <input required
               value="boozychemist@gmail.com"
               type="email" id={style.email} name="email" />
              <label htmlFor="adr">
                <i className="fa fa-address-card-o"></i> Address
              </label>
              <input required
               value="123 Main Street Apt.2G"
               type="text" id={style.address} name="address" />
              <label htmlFor="city">
                <i className="fa fa-institution"></i> City
              </label>
              <input required 
               value="Brooklyn"
              type="text" id={style.city} name="city" />
              <label htmlFor="state">State</label>
              <input
                required
                value="NY"
                type="text"
                id={style.state}
                name="state"
              />
              <label htmlFor="zipCode">Zip Code</label>
              <input
                required
                value="10036"
                type="text"
                id={style.zipCode}
                name="zipcode"
              />
            </section>
            <section className={style.billingInformation}>
              <h3>Payment</h3>
              <h3>Accepted Cards</h3>
              {/**Style these with color */}
              <div className={style.iconContainer}>
                <i className="fa fa-cc-visa" style={{ color: "orangered" }}></i>
                <i className="fa fa-cc-amex" style={{ color: "blueviolet" }}></i>
                <i className="fa fa-cc-mastercard" style={{ color: "red" }}></i>
                <i className="fa fa-cc-discover" style={{ color: "green" }}></i>
              </div>
              <label htmlFor="nameOnCArd">Name on Card</label>
              <input
               required
               value="Isabelle Smith"
               type="text" id={style.nameOnCard} name="cardname" />
              <label htmlFor="creditCardNumber">Credit card number</label>
              <input
                required
                value="1234 5678 9012 3456"
                type="text"
                id={style.creditCardNumber}
                name="cardnumber"
              />
              <label htmlFor=""></label>
              <label htmlFor="expyear">Exp Year</label>
              <input
                required
                value="05/28"
                type="text"
                id={style.expyear}
                name="expyear"
              />
              <label htmlFor="cvv">CVV</label>
              <input required
               value="082"
               type="text" id={style.cvv} name="cvv" />
            </section>
            <input type="submit" value="Submit" name="submit" />
          </form>
        </section>
      </div>
    </>
  );
};

export default CheckOutPage;
