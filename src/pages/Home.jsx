import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";
import RecipeModal from "../components/RecipeModal";
import ButtonAction from "../components/ButtonAction";
import Header from "../components/Header";

function Home() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const [randomRecipe, setRandomRecipe] = useState(null);

  const getRecipes = async (query) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await response.json();
    setRecipes(data.meals || []);
  };

  const getRandomRecipe = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/random.php`
    );
    const data = await response.json();
    const recipe = data.meals?.[0];

    if (recipe) {
      setRandomRecipe([recipe]);
      setSelectedRecipe(recipe);
    }
  };

  const navigate = useNavigate();

  function goToFavorites() {
    navigate(`/favorites`);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen align-center">
      <Header />
      <SearchBar searchInput={getRecipes} />
      <ButtonAction
        onClick={goToFavorites}
        label="⭐"
        className="absolute top-5 right-40"
        classNameButton="bg-amber-500 hover:shadow-amber-600/50"
      />

      <ButtonAction
        onClick={getRandomRecipe}
        label="Out of Ideas?"
        className="absolute top-5 right-5"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 m-auto mt-8 justify-items-center max-w-6xl">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            recipe={recipe}
            handleClick={setSelectedRecipe}
          />
        ))}
      </div>
      <RecipeModal
        recipe={selectedRecipe}
        closeModal={() => setSelectedRecipe(null)}
      />
    </div>
  );
}

export default Home;
