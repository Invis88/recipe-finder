import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  console.log('Recipe ID:', id);
    console.log('Recipe Data:', recipe);

  useEffect(() => {
    const fetchRecipe = async () => {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await res.json();
      setRecipe(data.meals?.[0]);
    };

    fetchRecipe();
  }, [id]);

  const renderIngredients = () => {
    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
      const ingredient = recipe[`strIngredient${i}`];
      const measure = recipe[`strMeasure${i}`];
      if (ingredient) {
        ingredients.push(`${measure} ${ingredient}`);
      }
    }
    return ingredients.map((item, i) => <li key={i}>{item}</li>);
  };

  if (!recipe) return <div className="p-6">Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-lg mt-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        ← Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{recipe.strMeal}</h1>
      <img
        src={recipe.strMealThumb}
        alt={recipe.strMeal}
        className="rounded-lg w-full max-h-[400px] object-cover mb-4"
      />
      <p className="text-gray-600 mb-2">
        <strong>Category:</strong> {recipe.strCategory} | <strong>Area:</strong> {recipe.strArea}
      </p>
      <h2 className="text-xl font-semibold mt-4 mb-2">Ingredients:</h2>
      <ul className="list-disc list-inside mb-4">{renderIngredients()}</ul>
      <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
      <p className="whitespace-pre-line text-gray-700">{recipe.strInstructions}</p>
    </div>
  );
}

export default RecipePage;
