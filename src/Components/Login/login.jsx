import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../Context/Cart/CartContext";
import style from "../../ComponentStyles/LoginStyle/loginStyle.module.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "Isabelle123",
    password: "DummyPassword1234"
  });
  const{loggedIn, setLoggedIn} = useContext(CartContext);
  
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // if this application was connected to a database the formData would be sent there    
    // right now it just logs the form data to the console
    console.log(formData);
    // a successful login to skip relogging in at checkout
    setLoggedIn(true);
  };
  
  return (
    <div className={style.loginContainer}>
    <main className={style.loginContent}>
     <section className={style.loginHeader}>
       <h4>Need Help ?</h4>
     </section>
     <form onSubmit={onSubmitHandler} className={style.loginInformationForm}>
       <input
         name="username"
         value={formData.username}
         onChange={onChangeHandler}
         required
         type="text"
         placeholder="Username"
       />
       <input
         name="password"
         value={formData.password}
         onChange={onChangeHandler}
         required
         type="password"
         placeholder="Password"
       />
       <button type="submit">Login</button>
     </form>
     <section className={style.loginFooter}>
       <h3>Don't have an account yet?</h3>
       <h5>
         <Link to="/signup" id={style.signupLink}>
           Create an account
         </Link>
       </h5>
     </section>
    </main>
   </div>
       );
}
export default Login;
