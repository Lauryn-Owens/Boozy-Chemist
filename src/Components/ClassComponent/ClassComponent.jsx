import React from "react";
import style from "../../ComponentStyles/ClassComponentStyle/classComponentStyle.module.css";

const ClassComponent = () => {
  return (
    <div id={style.classInformationContainer}>
      <h1>**All Classes Include the following**</h1>

      <p>
        Every class is exclusive, customizable and consists of a variety of
        spirits and themes.
      </p>
      <p>A purchase of a class promises:</p>
      <ul>
        <li>
          A customized kit will be delivered to you. The kit includes all of the
          ingredients, utensils, and recipes that is needed to fully partipate
          in that particular class.
        </li>
        <li>
          A Zoom link will be attached to the email confirmation that will be
          used to join the class to follow the lead of a certified mixologist.
        </li>
      </ul>
    </div>
  );
};

export default ClassComponent;
