import React, { useState } from "react";
import OurDrinksPage from "../../Pages/ourDrinks";
import style from "../../ComponentStyles/SearchFormStyle/searchFormStyle.module.css";

const SearchForm = () => {
  const [searchValue, setSearchValue] = useState("");
  function getSearchValue(e) {
    setSearchValue(e.target.value);
  }
  return (
    <>
      <form id={style.searchCocktails}>
        <input
          type="text"
          value={searchValue}
          required
          placeholder="Search Cocktails..."
          onChange={getSearchValue}
          id={style.searchInput}
        />
      </form>
      <OurDrinksPage searchValue={searchValue} />
    </>
  );
};
export default SearchForm;
