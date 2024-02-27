import React, {useContext}  from "react";
import {Link} from "react-router-dom";
import { CartContext } from "../Context/Cart/CartContext";
import style from "../PagesStyle/loginStyle.module.css";
import Login from "../Components/Login/login";

const LoginPage = () => {
     const {loggedIn, setLoggedIn, state} = useContext(CartContext);
     const totalQuantity = () => {
          return state.reduce((total, item) => total + item.quantity, 0);
      };
  
      const total = totalQuantity();

    return (
           <main>
               {
                    loggedIn ?
                     (
                         <section className={style.loggedIn}>
                         <button
                         style={{backgroundColor: total === 0 ? '#ededed' : 'inital'}}
                         className={style.loggedInBtn}
                         >
                         <Link to={total === 0 ? '' : '/checkout'}
                         className={style.loggedInLink}
                         >
                          {total === 0 ? 'Your Cart is empty!!! Lets go shopping!!!' : 'Checkout'}
                         </Link>
                         </button>
                         <button
                         className={style.loggedInBtn}
                         >
                              <Link to="/ourClasses"
                              className={style.loggedInLink}
                              >
                                   CONTINUE SHOPPING
                              </Link>
                         </button>
                         <button 
                         className={style.loggedInBtn}
                         onClick={() => {setLoggedIn(false)}}>
                              LOGOUT
                         </button>
                       </section>  
                     ) :
                     <Login/>
               }
           </main>
          
        );
};

export default LoginPage;