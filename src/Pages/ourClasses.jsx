import React, {useContext } from "react";
import { Link} from "react-router-dom";
import { CartContext } from "../Context/Cart/CartContext";
import { ClassesData } from "../ApplicationData/ClassesData";
import style from "../PagesStyle/ourClassesPageSyle.module.css";
import ClassComponent from "../Components/ClassComponent/ClassComponent";

const OurClassesPage = () => {
  const GlobalState = useContext(CartContext);
  const dispatch = GlobalState.dispatch;

  return (
    <div className={style.ourClassesPageContainer}>
      <ClassComponent />
      {ClassesData.map((classProduct) => {
        classProduct.quantity = 1;
        return (
          <div key={classProduct.id} className={style.classProductCard}>
            <section className={style.classImage}>
              <img src={classProduct.image} alt="Cocktail" />
            </section>
            <section className={style.classDetails}>
              <h1>{classProduct.classTitle}</h1>
              <p>Duration: About 1 hour 30 minutes</p>
              <p>Price: ${classProduct.classPrice}</p>
              <button className={style.descriptionButton}>
                <Link
                  className={style.link}
                  to={`/ourClasses/${classProduct.classTitle}`}
                  state={classProduct}
                >
                  Class Description
                </Link>
              </button>
              <button
                className={style.addToCartButton}
                onClick={() => dispatch({ type: "ADD", payload: classProduct })}
              >
                Add to Cart
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};
export default OurClassesPage;
