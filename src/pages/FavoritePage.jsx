import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("favorites")) || [];
    const cleaned = stored.filter((recipe) => recipe && recipe.idMeal);
    setFavorites(cleaned);
  }, []);

  const goToRecipe = (recipe) => {
    navigate(`/recipe/${recipe.idMeal}`);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen align-center">
      <Header />
      <div className="max-w-6xl m-auto">
        <h1 className="text-2xl font-bold mb-4 ml-4 ">Favorite recipes</h1>

        {favorites.length === 0 ? (
          <p className="text-gray-500">You don't have any favorite recipes</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-auto mt-4 justify-items-center max-w-6xl">
            {favorites.map((recipe) => (
              <RecipeCard
                key={recipe.idMeal}
                recipe={recipe}
                handleClick={goToRecipe}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
