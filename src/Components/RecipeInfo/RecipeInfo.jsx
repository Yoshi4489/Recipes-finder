import React from "react";
import "./index.css";

const RecipeInfo = ({ info, handleBack }) => {
  const handleClick = () => {
    handleBack();
  };
  console.log(info);

  return (
    <div className="recipe-container">
      <div className="left-section">
        <img src={info.recipe.image} />
      </div>
      <div className="right-section">
        <h2>{info.recipe.label}</h2>
        <div style={{fontWeight: '500', fontSize: 25}}>Ingredients</div>
        {info.recipe.ingredientLines.map((ingredient, index) => {
          return <div>{`${index + 1}) ${ingredient}`}</div>;
        })}
        <div>{`Calories : ${info.recipe.calories.toFixed(2)}`}</div>
      </div>
      <button onClick={handleClick} className="back-btn">
        Back
      </button>
    </div>
  );
};

export default RecipeInfo;
