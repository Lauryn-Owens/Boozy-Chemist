import React from "react";
import { useLocation } from "react-router-dom";
import CommentSection from "../Components/ClassCommentSection/commentSection";
import style from "../PagesStyle/singleClassPageStyle.module.css";

const SingleClass = () => {
  const location = useLocation();
  const classProduct = location.state;

  return (
    <>
      <div className={style.singleClassInformationContainer}>
        <section className={style.leftSectionPicture}>
          <img src={classProduct.image} alt="Class Icon." />
        </section>
        <section className={style.rightSectionDetails}>
          <h2>{classProduct.classTitle}</h2>
          <h4>Price ${classProduct.classPrice}</h4>
          <h2 id={style.description}>Class Description</h2>
          <p>{classProduct.classDescription}</p>
        </section>
      </div>
      <CommentSection />
    </>
  );
};
export default SingleClass;
