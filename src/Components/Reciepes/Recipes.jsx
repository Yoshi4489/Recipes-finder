import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

const Recipes = ({ catagories }) => {
  const APP_ID = "e9cdf00d";
  const APP_KEY = "d9521a01a5f46ac52ffcd7e52b0416a2";
  const [recipes, setRecipes] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [info, setInfo] = useState([]);
  const [error, setError] = useState(false)
 
  const recipeAPI = async (catagory) => {
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${String(
          catagory
        )}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = response.data;
      setRecipes(data["hits"]);

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(true)
    }
    if (error) {
      return <div className="error">Error 404 not found...</div>
    }
  };

  const handleBack = () => {
    setShowInfo(false);
  };

  useEffect(() => {
    recipeAPI('menu');
  }, []);

  useEffect(() => {
    recipeAPI(catagories)
  }, [catagories])

  return (
    <>
      {showInfo ? (
          <RecipeInfo info={info} handleBack={handleBack} />
      ) : (
        <div className="recipes-container">
          {recipes.map((recipe, index) => {
            return (
              <div
                key={index}
                className="container"
                onClick={() => {
                  setInfo(recipe);
                  setShowInfo(true);
                }}
              >
                <div className="image-container">
                  <img src={recipe.recipe.image} />
                </div>
                <div>{recipe.recipe.label}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Recipes;
