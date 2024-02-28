import React, { useState, useEffect } from "react";
import RandomCocktail from "../Components/RandomCocktail/randomCocktail";
import Sort from "../Components/Sort/sort";
import style from "../PagesStyle/ourDrinksPageStyle.module.css";

const OurDrinksPage = ({ searchValue }) => {
  const [cocktailList, setCocktailList] = useState([]);
  const [displayShowMoreBtn, setDisplayShowMoreBtn] = useState(true);
  const cocktailsPerLoad = 35;
  const [nextLoad, setNextLoad] = useState(cocktailsPerLoad);
  const [sortOption, setSortOption] = useState("");
  
  const loadMoreProducts = () => {
    setNextLoad(nextLoad + 35);
  };

  const onChangeSortOptionHandler = (sortOption) => {
      setSortOption(sortOption);
  }

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
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail"
      );
      const data = await response.json();
      const { drinks } = data;
      setCocktailList(drinks);
    } catch (error) {
      alert("ERROR FETCHING API DATA FROM COCKTAIL DB API!!!");
    }
  };

  return (
    <main>
      <RandomCocktail />
      <Sort
        onChangeSortOptionHandler={onChangeSortOptionHandler}
      />
      <h1 className={style.ourDrinksTitle}>Our Cocktails</h1>
      <section className={style.drinkContainer}>
        {cocktailList
          .filter((currSearchDrink) => {
            if (searchValue === "") {
              return true; // Return true for all drinks if searchValue is empty
            }
            return currSearchDrink.strDrink.includes(searchValue); // Filter based on searchValue
          })
          .filter((currSortDrink) => {
             if(sortOption === "recommended"){
              return currSortDrink.idDrink % 9 === 0
             }
             else if(sortOption === "whatsNew"){
              return currSortDrink.idDrink % 4 === 0
             }
             else{
              return true;
             }
          })
          .slice(0, nextLoad)
          .map((currDrink) => (
            <article className={style.cocktailCard} key={currDrink.idDrink}>
              <img
                className={style.cocktailImage}
                src={currDrink.strDrinkThumb}
                alt="Cocktail"
              />
              <h1>{currDrink.strDrink}</h1>
            </article>
          ))}
      </section>
      {
        displayShowMoreBtn ? (
        <button onClick={loadMoreProducts} className={style.loadMoreButton}>
          Load More Cocktails
        </button>
      ) : (
        <p className={style.noResults}>No Results Found</p>
      )}
    </main>
  );
};

export default OurDrinksPage;
