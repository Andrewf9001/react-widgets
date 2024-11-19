import React from "react";

import "../styles/main.scss";

const RecipeCard = (props) => {
  const recipe = props.recipe;

  return (
    <div className="recipe-card-wrapper">
      <div className="recipe-title">{recipe.strMeal}</div>
      <div className="tag-wrapper">
        {recipe.strArea === "Unknown" ? null : (
          <div className="area">{recipe.strArea}</div>
        )}

        {recipe.strCategory === "Unknown" ? null : (
          <div>{recipe.strCategory}</div>
        )}
      </div>

      <div className="ingredients-measurements-wrapper">
        <div className="ingredients-wrapper">
          <div className="title">Ingredients</div>
          {Object.entries(recipe).map((elements) =>
            elements[0].includes("Ingredient") === true &&
            elements[1] !== "" &&
            elements[1] !== null ? (
              <div className="ingredient-items">
                <div>{elements[1]}</div>
              </div>
            ) : null
          )}
        </div>

        <div className="measurements-wrapper">
          <div className="title">Measurements</div>
          {Object.entries(recipe).map((elements) =>
            elements[0].includes("Measure") === true &&
            elements[1] !== "" &&
            elements[1] !== null ? (
              <div>
                <div>{elements[1]}</div>
              </div>
            ) : null
          )}
        </div>
      </div>

      <div className="instructions">
        <div className="title">Instructions</div>
        <div className="recipe-instruction">{Object.values(recipe)[5]}</div>
      </div>
    </div>
  );
};

export default RecipeCard;
