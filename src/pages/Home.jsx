import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'
import RecipeModal from '../components/RecipeModal'

function Home() {
    const [recipes, setRecipes] = useState([])
    const [selectedRecipe, setSelectedRecipe] = useState(null)

    const getRecipes = async (query) => {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        )
        const data = await response.json()
        setRecipes(data.meals || [])
    }

    console.log(selectedRecipe);
    

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold text-center text-purple-600 mb-4">🍽️ Recipe Finder</h1>
            <SearchBar searchInput={getRecipes}/>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
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
    )
}

export default Home