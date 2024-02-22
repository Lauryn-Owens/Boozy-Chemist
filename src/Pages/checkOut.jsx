import React, { useContext, useState } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../PagesStyle/checkOutPageStyle.module.css";
import CheckOutConfirmation from "./checkOutConfirmation";

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
            <tr>
              <th>Class Name</th>
              <th>Class Price</th>
            </tr>
            {state.map((currCartItem) => {
              return (
                <>
                  <tr key={currCartItem.id}>
                    <td>{currCartItem.classTitle}</td>
                    <td>
                      <span>{currCartItem.quantity}&#215;</span>
                      <span className={style.currCartItemPrice}>
                        ${currCartItem.classPrice}
                      </span>
                    </td>
                  </tr>
                </>
              );
            })}
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
                type="text"
                placeholder="Savannah Smith"
                id={style.fullName}
                name="fullname"
              />
              <label htmlFor="email">
                <i className="fa fa-envelope"></i> Email
              </label>
              <input required type="email" id={style.email} name="email" />
              <label htmlFor="adr">
                <i className="fa fa-address-card-o"></i> Address
              </label>
              <input required type="text" id={style.address} name="address" />
              <label htmlFor="city">
                <i className="fa fa-institution"></i> City
              </label>
              <input required type="text" id={style.city} name="city" />
              <label htmlFor="state">State</label>
              <input
                required
                type="text"
                id={style.state}
                name="state"
                placeholder="NY"
              />
              <label htmlFor="zipCode">Zip Code</label>
              <input
                type="text"
                id={style.zipCode}
                name="zipcode"
                placeholder="10121"
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
              <input type="text" id={style.nameOnCard} name="cardname" />
              <label htmlFor="creditCardNumber">Credit card number</label>
              <input
                type="text"
                id={style.creditCardNumber}
                name="cardnumber"
              />
              <label htmlFor=""></label>
              <label htmlFor="expyear">Exp Year</label>
              <input
                required
                type="text"
                id={style.expyear}
                name="expyear"
                placeholder="2022"
              />
              <label htmlFor="cvv">CVV</label>
              <input required type="text" id={style.cvv} name="cvv" />
            </section>
            <input type="submit" value="Submit" name="submit" />
          </form>
        </section>
      </div>
    </>
  );
};

export default CheckOutPage;
