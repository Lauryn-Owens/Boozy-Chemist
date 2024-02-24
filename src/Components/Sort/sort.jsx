import Style from "../../ComponentStyles/filterSortStyle/filterSortStyle.module.css";

const Sort = ({onChangeSortOptionHandler}) => {

  return (
    <section>
      <label htmlFor="sort">SORT</label>
      <select name="sort" id="sort"
      onChange={(e) => {
       onChangeSortOptionHandler(e.target.value);
      }}
      >
        <option value="recommended">Recommended</option>
        <option value="whatsNew">Whats New</option>
      </select>
    </section>
  );
};

export default Sort;