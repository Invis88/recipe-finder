import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import ButtonFullRecipe from "./ButtonFullRecipe";
import ButtonFavorite from "./ButtonFavorite";

function RecipeModal({ recipe, closeModal }) {
  const navigate = useNavigate();

  function goToRecipe() {
    navigate(`/recipe/${recipe.idMeal}`);
  }

  const modalRef = useRef(null);

  useEffect(() => {
    if (!recipe) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [recipe]);

  function handleBackdropClick(e) {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  }

  useEffect(() => {
    if (!recipe) return;

    const escapeButton = (e) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", escapeButton);

    return () => {
      document.removeEventListener("keydown", escapeButton);
    };
  }, [recipe, closeModal]);

  if (!recipe) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-xl shadow-lg max-w-xl w-full relative max-h-[90vh] overflow-y-hidden"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-3 text-gray-600 hover:text-red-500 hover:scale-110 ease-in-out transition-all duration-200  text-5xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-2 font-quicksand max-w-[510px]">
          {recipe.strMeal}
        </h2>
        <div className="flex justify-between ">
          <ButtonFullRecipe recipe={goToRecipe} />
          <ButtonFavorite recipe={recipe} />
        </div>

        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="rounded-xl mb-4 w-full"
        />

        <p className="text-sm text-gray-500 mb-2">
          <strong>Category:</strong> {recipe.strCategory} |{" "}
          <strong>Cuisine:</strong> {recipe.strArea}
        </p>

        <p className="line-clamp-3 text-gray-700 whitespace-pre-line ">
          {recipe.strInstructions}
        </p>
      </div>
    </div>
  );
}

export default RecipeModal;
