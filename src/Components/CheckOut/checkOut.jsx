import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/Cart/CartContext";
import { useNavigate,useLocation} from "react-router-dom";
import style from "../../ComponentStyles/CheckOutStyle/checkOutStyle.module.css";

const CheckOut = () => {
  const GlobalState = useContext(CartContext);
  const state = GlobalState.state;

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

  /**will execute as a user inputs information */
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
    e.preventDefault();
    navigate("/checkOutConfirmation");
    console.log('click')
    /*if this project was connected to a database, the formData 
    state object would be pushed/sent to the database
    for now the data is just logged
    */
    console.log(formData);
  };

  const fullTotal = totalWithTax(cartTotal);

  return (
    <>
      <div className={style.checkout}>
        <h1 className={style.checkoutHeader}> Check Out</h1>
        {state.length === 0 ? <h1 className={style.totalCost}>Total Cost: $0</h1> : null}
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
          <form onSubmit={(e) => {
            e.preventDefault();
            console.log(1);
            getCheckOutConfirmation(e);
            }}>
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
              onChange={onChangeHandler}
            />
              <label htmlFor="email">
                <i className="fa fa-envelope"></i> Email
              </label>
              <input required
               value="boozychemist@gmail.com"
               type="email" id={style.email} name="email"
               onChange={onChangeHandler} />
              <label htmlFor="adr">
                <i className="fa fa-address-card-o"></i> Address
              </label>
              <input required
               value="123 Main Street Apt.2G"
               type="text" id={style.address} name="address"
               onChange={onChangeHandler} />
              <label htmlFor="city">
                <i className="fa fa-institution"></i> City
              </label>
              <input required 
               value="Brooklyn"
              type="text" id={style.city} name="city"
              onChange={onChangeHandler} />
              <label htmlFor="state">State</label>
              <input
                required
                value="NY"
                type="text"
                id={style.state}
                name="state"
                onChange={onChangeHandler}
              />
              <label htmlFor="zipCode">Zip Code</label>
              <input
                required
                value="10036"
                type="text"
                id={style.zipCode}
                name="zipcode"
                onChange={onChangeHandler}
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
               type="text" id={style.nameOnCard} name="cardname"
               onChange={onChangeHandler}
                />
              <label htmlFor="creditCardNumber">Credit card number</label>
              <input
                required
                value="1234 5678 9012 3456"
                type="text"
                id={style.creditCardNumber}
                name="cardnumber"
                onChange={onChangeHandler}
              />
              <label htmlFor=""></label>
              <label htmlFor="expyear">Exp Year</label>
              <input
                required
                value="05/28"
                type="text"
                id={style.expyear}
                name="expyear"
                onChange={onChangeHandler}
              />
              <label htmlFor="cvv">CVV</label>
              <input required
               value="082"
               type="text" id={style.cvv} name="cvv" 
               onChange={onChangeHandler}
               />
            </section>
            <input type="submit" value="Submit" name="submit" />
          </form>
        </section>
      </div>
    </>
  );
};

export default CheckOut;