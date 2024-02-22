import React, { useState } from "react";
import style from "../PagesStyle/signUpPageStyle.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: ""
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
  const onSubmit = (e) => {
    /*if this was connected to a database, the formData 
      state object would be pushed to the database*/
    e.preventDefault();
  };
  return (
    <div className={style.signUpContainer}>
      <main className={style.signUpContent}>
        <section className={style.signUpHeader}>
          <h3>Create an Account</h3>
          <h4>Need Help?</h4>
        </section>
        <form onSubmit={onSubmit} className={style.signUpInformationForm}>
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            required
            type="email"
            placeholder="Email"
          />
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
          <input
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onChangeHandler}
            required
            type="password"
            placeholder="Confirm Password"
          />
          <button>Sign Up</button>
        </form>
        <section className={style.signUpFooter}>
          <h5>
            <Link to="/loginIn" id={style.loginLink}>
              Login
            </Link>
          </h5>
        </section>
      </main>
    </div>
  );
};

export default SignUp;
