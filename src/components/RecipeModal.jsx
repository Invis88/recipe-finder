import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'


function RecipeModal({ recipe, closeModal }) {
    const navigate = useNavigate()

    function goToRecipe() {
        navigate(`/recipe/${recipe.idMeal}`)
    }

    const modalRef = useRef(null)
    
    useEffect(() => {
        if (!recipe) return
    
        document.body.style.overflow = 'hidden'
    
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [recipe])

    function handleBackdropClick(e) {
        if (modalRef.current && modalRef.current.contains(e.target)) {
            closeModal()
        }
    }

    if (!recipe) return null

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"

            onClick={handleBackdropClick}
            >
            <div 
                ref={modalRef}
                className="bg-white p-6 rounded-lg shadow-lg max-w-xl w-full relative max-h-[90vh] overflow-y-hidden">

                <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-gray-600 hover:text-red-500 text-2xl">
                    &times;
                </button>

                <h2 className="text-2xl font-bold mb-2">{recipe.strMeal}</h2>

                <button
                    onClick={goToRecipe}
                    className='mb-4 bg-purple-400 text-white px-4 py-2 rounded hover:bg-purple-700 font-medium transition'>
                    View Full Recipe
                </button>

                <img
                    src={recipe.strMealThumb}
                    alt={recipe.strMeal}
                    className="rounded-lg mb-4 w-full"/>

                <p className="text-sm text-gray-500 mb-2">
                    <strong>Category:</strong> {recipe.strCategory} | <strong>Area:</strong> {recipe.strArea}
                </p>

                <p className="line-clamp-3 text-gray-700 whitespace-pre-line ">{recipe.strInstructions}</p>
            </div>
        </div>
    )

}

export default RecipeModal