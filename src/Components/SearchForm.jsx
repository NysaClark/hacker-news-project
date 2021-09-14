import React from "react";
import { useGlobalContext } from "../util/context";

const SearchForm = () => {
  const {handleSearch, query} = useGlobalContext();
  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <h2>search hacker news</h2>
      <input type="text" className="form-input" value={query} onChange={} />
    </form>
  )
};

export default SearchForm;
