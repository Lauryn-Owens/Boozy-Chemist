import style from "../../ComponentStyles/SortStyle/sortStyle.module.css";

const Sort = ({onChangeSortOptionHandler}) => {

  return (
    <section className={style.sort}>
      <label htmlFor="sort" className={style.label}>SORT</label>
      &nbsp; &nbsp; &nbsp;
      <select name="sort" id="sort"
      className={style.selection}
      onChange={(e) => {
       onChangeSortOptionHandler(e.target.value);
      }}
      >
        <option 
        style={{padding:'2rem'}}
        value="recommended">Recommended</option>
        <option value="whatsNew">Whats New</option>
      </select>
    </section>
  );
};

export default Sort;