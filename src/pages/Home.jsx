import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchBar from "../components/SearchBar";
import ButtonAction from "../components/ButtonAction";
import Header from "../components/Header";
import RecipeModal from "../components/RecipeModal";

function Home() {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [, setRandomRecipe] = useState(null);

  const navigate = useNavigate();

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

  function goToFavorites() {
    navigate(`/favorites`);
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center flex-col">
      <Header textSize="text-9xl" />
      <SearchBar />
      <div className="flex justify-center items-center gap-3">
        <ButtonAction onClick={goToFavorites} label="Favorites ⭐" />
        <ButtonAction onClick={getRandomRecipe} label="Out of Ideas?" />
      </div>
      <RecipeModal
        recipe={selectedRecipe}
        closeModal={() => setSelectedRecipe(null)}
      />
    </div>
  );
}

export default Home;
