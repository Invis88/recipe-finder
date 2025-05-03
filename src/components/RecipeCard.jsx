import React from "react";

function RecipeCard({ recipe, handleClick }) {
  return (
    <div
      onClick={() => handleClick(recipe)}
      className="relative w-64 h-80 rounded-2xl overflow-hidden cursor-pointer group"
    >
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <h3 className="text-white font-bold text-xl font-quicksand text-center px-4">
          {recipe.strMeal}
        </h3>
        <h2 className="text-blue-300">{recipe.strArea}</h2>
      </div>
    </div>
  );
}

export default RecipeCard;
