import { useState } from 'react'

import SearchBar from '../components/SearchBar'
import RecipeCard from '../components/RecipeCard'

function Home() {
    const [recipes, setRecipes] = useState([])

    const getRecipes = async (query) => {
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
        )
        const data = await response.json()
        setRecipes(data.meals || [])
    }

    return (
        <div>
            <h1> Recipe Finder </h1>
            <SearchBar searchInput={getRecipes}/>
            <div>
                {recipes.map((recipe) => (
                    <RecipeCard 
                        key={recipe.idMeal}
                        recipe={recipe}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home