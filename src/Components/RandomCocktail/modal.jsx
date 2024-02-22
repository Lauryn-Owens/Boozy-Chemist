import React, { useState, useEffect } from "react";
import ReactDom from "react-dom";
import style from "../../ComponentStyles/RandomCocktailStyle/modalStyle.module.css";

const Modal = ({ modalOpen, closeModal }) => {
  const [randomCocktail, setRandomCocktail] = useState([]);
  useEffect(() => {
    getRandomCocktail();
  }, []);
  //if it not open dont return/render anything
  if (!modalOpen) {
    return null;
  }
  async function getRandomCocktail() {
    try {
      /*returns one object with a property drinks that value is an array of objects */
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      //store the data into our data variable
      const data = await response.json();
      const { drinks } = data;
      setRandomCocktail(drinks);
    } catch (error) {
      alert("ERROR FETCHING API DATA FROM COCKTAIL DB API!!!");
    }
  }

  return ReactDom.createPortal(
    <div className={style.modalContainer}>
      <button onClick={closeModal}>&#10005;</button>
      {randomCocktail
        .filter((currCocktail) => {
          return (currCocktail.strAlcoholic = "Alcoholic");
        })
        .map((cocktail) => {
          let cocktailInstructions = cocktail.strInstructions;
          cocktailInstructions = cocktailInstructions.split(".");
          //get cocktail cocktail ingredients
          const cocktailIngredients = Object.entries(cocktail).filter(
            (currCocktail) => {
              return (
                currCocktail[0].includes("strIngredient") &&
                currCocktail[1] !== null
              );
            }
          );
          return (
            <>
              <h1>{cocktail.strDrink}</h1>
              <img src={cocktail.strDrinkThumb} alt="Current Cocktail." />
              <h1>Ingredients</h1>
              <ul id="ingredients__list">
                {cocktailIngredients.map((currIngredient) => {
                  return (
                    <li style={{ listStyleType: "decimal" }}>
                      {currIngredient[1]}
                    </li>
                  );
                })}
              </ul>
              <h1>Instructions</h1>
              <ul id="instructions__list">
                {cocktailInstructions.map((currStep) => {
                  //if step is not empty
                  if (currStep.length) {
                    return (
                      <li style={{ listStyleType: "decimal" }}>{currStep}.</li>
                    );
                  }
                })}
              </ul>
            </>
          );
        })}
    </div>,
    document.getElementById("modal")
  );
};
export default Modal;
