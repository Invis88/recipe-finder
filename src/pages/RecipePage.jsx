import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ButtonFavorite from "../components/ButtonFavorite";
import Header from "../components/Header";

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [ingredientsCheck, setIngredientsCheck] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      const data = await res.json();
      setRecipe(data.meals?.[0]);
    };

    fetchRecipe();
  }, [id]);

  useEffect(() => {
    const stored = localStorage.getItem(`checked_${id}`);
    if (stored) {
      setIngredientsCheck(JSON.parse(stored));
    }
  }, [id]);

  function renderIngredients() {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient && ingredient.trim() !== "") {
        ingredients.push({ text: `${measure} ${ingredient}`, index: i });
      }
    }

    function checkboxChange(index) {
      const updated = {
        ...ingredientsCheck,
        [index]: !ingredientsCheck[index],
      };
      setIngredientsCheck(updated);
      localStorage.setItem(`checked_${id}`, JSON.stringify(updated));
    }

    return ingredients.map(({ text, index }) => (
      <li key={index} className="flex items-center gap-3 mb-1">
        <div className="dark:bg-black/10">
          <label className="text-white">
            <input
              type="checkbox"
              checked={!!ingredientsCheck[index]}
              onChange={() => checkboxChange(index)}
              className="dark:border-white-400/20 dark:scale-100 transition-all duration-500 ease-in-out dark:hover:scale-110 dark:checked:scale-100 w-5 h-5"
            />
          </label>
        </div>
        <span className="text-gray-800">{text}</span>
      </li>
    ));
  }

  if (!recipe) return <div className="p-6">Loading...</div>;

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <button
        className="cursor-pointer duration-200 hover:scale-125 active:scale-100 absolute"
        title="Go Back"
        onClick={() => navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          viewBox="0 0 24 24"
          className="stroke-blue-300"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M11 6L5 12M5 12L11 18M5 12H19"
          ></path>
        </svg>
      </button>
      <Header />
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-6">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold mb-4 font-quicksand">
            {recipe.strMeal}
          </h1>

          <ButtonFavorite recipe={recipe} />
        </div>

        <div className="flex gap-10">
          <div>
            <img
              src={recipe.strMealThumb}
              alt={recipe.strMeal}
              className="rounded-lg  max-h-[400px] object-cover mb-2"
            />
            <p className="text-gray-600 mb-2">
              <strong>Category:</strong> {recipe.strCategory} |{" "}
              <strong>Cuisine:</strong> {recipe.strArea}
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc list-inside mb-4">
              {renderIngredients()}
            </ul>
          </div>
        </div>
        <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
        <p className="whitespace-pre-line text-gray-700">
          {recipe.strInstructions}
        </p>
      </div>
    </div>
  );
}

export default RecipePage;
