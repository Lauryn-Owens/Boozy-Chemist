import React, { useState } from "react";
import OurDrinksPage from "../../Pages/ourDrinks";
import style from "../../ComponentStyles/SearchFormStyle/searchFormStyle.module.css";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  
  const getSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <form id={style.searchCocktails}>
        <input
          type="text"
          value={searchValue}
          required
          placeholder="Search Cocktails By Name..."
          onChange={getSearchValue}
          id={style.searchInput}
        />
      </form>
      <OurDrinksPage searchValue={searchValue} />
    </>
  );
};

export default SearchForm;
