import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import style from "../../ComponentStyles/RandomCocktailStyle/modalStyle.module.css";

const Modal = ({ modalOpen, closeModal }) => {
  const [randomCocktail, setRandomCocktail] = useState([]);

  useEffect(() => {
    if (modalOpen) {
      getRandomCocktail();
    }
  }, [modalOpen]);

  async function getRandomCocktail() {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      );
      const data = await response.json();
      const { drinks } = data;
      setRandomCocktail(drinks);
    } catch (error) {
      alert("ERROR FETCHING API DATA FROM COCKTAIL DB API!!!");
    }
  }

  if (!modalOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className={style.modalContainer}>
      <button onClick={closeModal}>&#10005;</button>
      {randomCocktail
        .filter((currCocktail) => currCocktail.strAlcoholic === "Alcoholic")
        .map((cocktail) => {
          let cocktailInstructions = cocktail.strInstructions;
          cocktailInstructions = cocktailInstructions.split(".");
          const cocktailIngredients = Object.entries(cocktail).filter(
            (currCocktail) =>
              currCocktail[0].includes("strIngredient") &&
              currCocktail[1] !== null
          );
          return (
            <>
              <h1>{cocktail.strDrink}</h1>
              <img src={cocktail.strDrinkThumb} alt="Current Cocktail." />
              <h1>Ingredients</h1>
              <ul id="ingredients__list">
                {cocktailIngredients.map((currIngredient, idx) => (
                  <li key={idx} style={{ listStyleType: "decimal" }}>
                    {currIngredient[1]}
                  </li>
                ))}
              </ul>
              <h1>Instructions</h1>
              <ul id="instructions__list">
                {cocktailInstructions.map((currStep, idx) => {
                  if (currStep.length) {
                    return (
                      <li key={idx} style={{ listStyleType: "decimal" }}>
                        {currStep}.
                      </li>
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
