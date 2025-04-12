import React from 'react'

function RecipeCard({ recipe, handleClick }) {
    return (
        <div onClick={() => handleClick(recipe)}>
            <img src={recipe.strMealThumb} alt={recipe.strMeal}
                className='rounded-lg'/>
            <h3>{recipe.strMeal}</h3>
        </div>
    )
}

export default RecipeCard