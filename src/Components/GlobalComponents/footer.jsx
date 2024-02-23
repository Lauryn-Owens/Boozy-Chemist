import React from "react";
import { Link } from "react-router-dom";
import style from "../../ComponentStyles/GlobalComponentStyles/footerStyle.module.css";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaTiktok, FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <section className={style.socialMediaIcons}>
        <Link to="#" className={style.iconLink}>
          <AiFillFacebook className={style.icon} />
        </Link>
        <Link to="#" className={style.iconLink}>
          <FaTiktok className={style.icon} />
        </Link>
        <Link to="#" className={style.iconLink}>
          <FaInstagramSquare className={style.icon} />
        </Link>
        <Link to="#" className={style.iconLink}>
          <FaPinterestSquare className={style.icon} />
        </Link>
        <Link to="#" className={style.iconLink}>
          <AiFillTwitterSquare className={style.icon} />
        </Link>
      </section>
      <ul className={style.list}>
        <li>
          <Link to="/" className={style.footerLink}>Home</Link>
        </li>
        <li>
          <Link to="/frequentlyAskedQuestions" className={style.footerLink}>Frequently Asked Questions</Link>
        </li>
        <li>
          <Link to="/contactUs" className={style.footerLink}>Contact Us</Link>
        </li>
      </ul>
      <p className={style.copyRight}>Boozy Chemist @ 2024</p>
    </footer>
  );
};

export default Footer;
