import React, { useState, useEffect } from "react";
import RandomCocktail from "../Components/RandomCocktail/randomCocktail";
import style from "../PagesStyle/ourDrinksPageStyle.module.css";

const OurDrinksPage = ({ searchValue }) => {
  const [cocktailList, setCocktailList] = useState([]);

  const cocktailsPerLoad = 35;
  const [nextLoad, setNextLoad] = useState(cocktailsPerLoad);
  const loadMoreProducts = () => {
    setNextLoad(nextLoad + 35);
  };
  //run getDrinkDetails function when the page loads-only runs on the first render
  //the  getDrinkDetails function gather the data from the api
  useEffect(() => {
    getDrinkDetails();
  }, []);

  //use async/await to fetch this data
  const getDrinkDetails = async () => {
    try {
      /*returns one object with a property drinks that value is an array of objects */

      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      //store the data into our data variable
      const data = await response.json();
      const { drinks } = data;
      setCocktailList(drinks);
    } catch (error) {
      alert("ERROR FETCHING API DATA FROM COCKTAIL DB API!!!");
    }
  };

  return (
    <>
      <RandomCocktail />
      <h1 className={style.ourDrinksTitle}>Our Cocktails</h1>
      <div className={style.drinkContainer}>
        {cocktailList
          .filter((currFilterDrink) => {
            if (searchValue === "") {
              return currFilterDrink;
            } else if (currFilterDrink.strDrink.includes(searchValue)) {
              return currFilterDrink;
            }
          })
          .slice(0, nextLoad)
          .map((currDrink) => {
            return (
              <>
                <article className={style.cocktailCard} key={currDrink.idDrink}>
                  <h1>{currDrink.strDrink}</h1>
                  <img
                    className={style.cocktailImage}
                    src={currDrink.strDrinkThumb}
                    alt="Cocktail"
                  />
                </article>
              </>
            );
          })}
      </div>
      <button onClick={loadMoreProducts} className={style.loadMoreButton}>
        Load More Cocktails
      </button>
    </>
  );
};
export default OurDrinksPage;
