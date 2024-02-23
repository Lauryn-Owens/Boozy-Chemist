import React, { useState, useEffect } from "react";
import RandomCocktail from "../Components/RandomCocktail/randomCocktail";
import style from "../PagesStyle/ourDrinksPageStyle.module.css";

const OurDrinksPage = ({ searchValue }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [displayShowMoreBtn, setDisplayShowMoreBtn] = useState(true);
  const cocktailsPerLoad = 35;
  const [nextLoad, setNextLoad] = useState(cocktailsPerLoad);

  const loadMoreProducts = () => {
    setNextLoad(nextLoad + 35);
  };

  useEffect(() => {
    getDrinkDetails();
  }, []);

  useEffect(() => {
    if (cocktailList.length === 0) return; // Exit if the cocktailList is empty
    // Check if the searchValue is empty or if any drink matches the searchValue
    const hasMatch = cocktailList.some((currFilterDrink) =>
      currFilterDrink.strDrink.includes(searchValue)
    );
    setDisplayShowMoreBtn(hasMatch); // Update the displayShowMoreBtn state based on the search result
  }, [cocktailList, searchValue]);

  const getDrinkDetails = async () => {
    try {
      const response = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
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
      <section className={style.drinkContainer}>
        {cocktailList
          .filter((currFilterDrink) => {
            if (searchValue === "") {
              return true; // Return true for all drinks if searchValue is empty
            }
            return currFilterDrink.strDrink.includes(searchValue); // Filter based on searchValue
          })
          .slice(0, nextLoad)
          .map((currDrink, idx) => (
            <article
              key={idx}
              className={style.cocktailCard}
              key={currDrink.idDrink}
            >
              <img
                className={style.cocktailImage}
                src={currDrink.strDrinkThumb}
                alt="Cocktail"
              />
              <h1>{currDrink.strDrink}</h1>
            </article>
          ))}
      </section>
      {displayShowMoreBtn ? (
        <button onClick={loadMoreProducts} className={style.loadMoreButton}>
          Load More Cocktails
        </button>
      ) : (
        <p className={style.noResults}>No Results Found</p>
      )}
    </>
  );
};

export default OurDrinksPage;
