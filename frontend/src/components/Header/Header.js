import React, { useState } from "react";
import "./css/Header.css";
import ResultItem from "../ResultItem/ResultItem";
import axios from "axios";
export default function Header() {
  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState("");
  const url = "http://localhost:8000";

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(url, {body:(value) })
      .then((res) => setRecipes(res.data))
  };

  return (
    <div className="header">
      <h1 className="header__title">Food Finder</h1>
      <form className="search-form" onSubmit={submitForm}>
        <div className="search-form__bar">
          <input
            type="text"
            name="ingredients"
            value={value}
            onChange={(e) => changeHandler(e)}
          ></input>
          <button type="submit">Search</button>
        </div>
      </form>
      {recipes.map((item, i) => (
        <ResultItem key={i} recipe={item.recipe} />
      ))}
    </div>
  );
}
