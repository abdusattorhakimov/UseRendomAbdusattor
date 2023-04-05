import React from "react";
import "./Search.css";

function Search({
  setUrl,
  setDataa,
  data,
  setRefresh,
  refresh,
  setSearch,
  search,
}) {
  console.log(search);
  return (
    <div>
      <form id="form" className="form">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="form__input"
          type="search"
          name="user-search"
          id="form__input"
          placeholder="Live search users"
          aria-label="search"
          autocomplete="off"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            setRefresh(!refresh);
          }}
          id="form__button"
          className="form__button"
        >
          <span className="form__button-inner">
            <span className="material-symbols-outlined">refresh</span>
            <span>Refresh</span>
          </span>
        </button>
        {data && data.length !== 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              setDataa([]);
            }}
            id="clear__button"
            className="clear__button form__button"
          >
            <span className="form__button-inner">
              <i className="fa-sharp fa-solid fa-broom"></i>
              <span>Clear</span>
            </span>
          </button>
        )}
        <div className="border"></div>
      </form>
    </div>
  );
}

export default Search;
