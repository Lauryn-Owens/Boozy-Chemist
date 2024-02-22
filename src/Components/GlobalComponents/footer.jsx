import React from "react";
import { Link } from "react-router-dom";
import style from "../../ComponentStyles/GlobalComponentStyles/footerStyle.module.css";
import { AiFillFacebook, AiFillTwitterSquare } from "react-icons/ai";
import { FaTiktok, FaInstagramSquare, FaPinterestSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={style.footerContainer}>
      <section className={style.socialMediaIcons}>
        <Link to="#">
          <AiFillFacebook className={style.icon} />
        </Link>
        <Link to="#">
          <FaTiktok className={style.icon} />
        </Link>
        <Link to="#">
          <FaInstagramSquare className={style.icon} />
        </Link>
        <Link to="#">
          <FaPinterestSquare className={style.icon} />
        </Link>
        <Link to="#">
          <AiFillTwitterSquare className={style.icon} />
        </Link>
      </section>
      <ul className={style.list}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/frequentlyAskedQuestions">Frequently Asked Questions</Link>
        </li>
        <li>
          <Link to="/contactUs">Contact Us</Link>
        </li>
      </ul>
      <p className={style.copyRight}>Boozy Chemist @ 2024</p>
    </footer>
  );
};

export default Footer;
