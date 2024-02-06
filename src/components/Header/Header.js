import React, { useState } from "react";
import "./css/Header.css";
import ResultItem from "../ResultItem/ResultItem";
import dotenv from "dotenv";
dotenv.config();

export default function Header() {
  const baseURL = "https://api.edamam.com";
  const api_key = process.env.API_KEY;
  const app_id = process.env.APP_ID;
  const search = `/search`;

  const [recipes, setRecipes] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    fetch(`${baseURL}${search}?q=${value}&app_id=${app_id}&app_key=${api_key}`)
      .then((res) => res.json())
      .then((data) => setRecipes(data.hits));
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
