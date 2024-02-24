import React, { useContext } from "react";
import { CartContext } from "../Context/Cart/CartContext";
import style from "../PagesStyle/shoppingCartPageStyle.module.css";
import { Link } from "react-router-dom";

const ShoppingCartPage = () => {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;
  const state = GlobalState.state;

  const sumItems = state.reduce((total, item) => {
    return total + item.classPrice * item.quantity;
  }, 0);
  
  return (
    <div className={style.shoppingCartPageContainer}>
      <h1 id={style.shoppingCartTitle}>Shopping Cart</h1>
      {
        !state.length ? 
        <p className={style.cartEmpty}>Cart is Empty</p> : 
        null
      }
      {state.map((item, index) => {
        return (
            <div key={index} className={style.classDetailsContainer}>
              <section className={style.classImageSection}>
                <img src={item.image} alt="Drink" />
              </section>
              <section className={style.classDetails}>
                <p>{item.classTitle}</p>
                <p>Type: Class</p>
              </section>
              <section className={style.classNumericDetails}>
                <p>Price: ${item.classPrice}</p>
                <p>Quantity: {item.quantity}</p>
              </section>
              <p>Class Total: ${item.quantity * item.classPrice}</p>
              <div className="quantity">
                <section className={style.classEditQuantity}>
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: item })
                    }
                  >
                    +
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch({ type: "DECREASE", payload: item });
                      } else {
                        dispatch({ type: "REMOVE", payload: item });
                      }
                    }}
                  >
                    -
                  </button>
                  <button
                    className={style.remove}
                    onClick={() => dispatch({ type: "REMOVE", payload: item })}
                  >
                    Remove
                  </button>
                </section>
              </div>
            </div>
        );
      })}
      {state.length > 0 && (
        <>
          <button
            id={style.clearButton}
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear Cart
          </button>
          <div className="total">
            <h2>Total: ${sumItems}</h2>
            {
              state.length ?
              <button id={style.checkOutButton}>
              <Link id={style.checkOutLink} to="/checkout" state={sumItems}>
                Continue To Check Out
              </Link>
            </button> :
            null
            }
           
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartPage;
