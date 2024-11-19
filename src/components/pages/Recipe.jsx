import React, { useEffect, useState } from "react";
import axios from "axios";

import RecipeCard from "./recipeCard";
import "../styles/main.scss";

const Recipe = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState(null);

  const getRecipe = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      .then((response) => setResult(response.data.meals));
  };

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getRecipe();
    setQuery("");
  };

  useEffect(() => {}, [result]);

  return (
    <div className="recipe-form-wrapper">
      <form onSubmit={handleSubmit}>
        <label>Search for a recipe by keyword</label>
        <input type="text" onChange={handleChange} value={query} />
      </form>

      {result === null ? null : (
        <div className="recipe-cards">
          {result.map((recipe) => (
            <RecipeCard key={recipe[0]} recipe={recipe} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Recipe;
