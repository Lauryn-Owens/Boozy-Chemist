import React, { useState } from "react";
import style from "../PagesStyle/loginPageStyle.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the form submission, like sending the formData to a server
        // For now it logs the form data
        console.log(formData);
    };

    return (
        <div className={style.loginContainer}>
            <main className={style.loginContent}>
                <section className={style.loginHeader}>
                    <h3>Already Members</h3>
                    <h4>Need Help?</h4>
                </section>
                <form onSubmit={onSubmit} className={style.loginInformationForm}>
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
                    <button type="submit">Log In</button>
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
};

export default LoginPage;