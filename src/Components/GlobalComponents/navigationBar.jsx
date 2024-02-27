import style from "../../ComponentStyles/GlobalComponentStyles/navigationBarStyle.module.css";
import { Link } from "react-router-dom";
import { FaCocktail } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartQuantity from "../CartQuantity/cartQuantity";

const NavigationBar = () => {
  return (
      <header className={style.navigationHeader}>
        <label className={style.toggleMenuLabel} htmlFor={style.toggleMenu}>
          <div className={style.hamburgerIconContainer}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </label>
        <input type="checkbox" id={style.toggleMenu} />
        <section className={style.logoContainer}>
          <FaCocktail id={style.logoImage} />
          <h1>
            Boozy
            <br />
            Chemist
          </h1>
        </section>
        <nav className={style.navigationList}>
          <ul className={style.linkList}>
            <li>
              <Link to="/ourClasses">Our Classes</Link>
            </li>
            <li>
              <Link to="/ourDrinks">Our Drinks</Link>
            </li>
            <li id={style.shoppingCart}>
              <Link to="/shoppingCart">
                <AiOutlineShoppingCart id={style.shoppingCartLogo} />
                <CartQuantity />
              </Link>
            </li>
            <li>
              <button id={style.loginButton}>
                <Link className={style.loginButtonLink} to="/login">
                  Log in
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
  );
};

export default NavigationBar;
