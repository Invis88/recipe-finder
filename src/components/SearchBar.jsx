import React, { useState } from 'react'

function SearchBar({ searchInput }) {
    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        searchInput(input)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text'
                placeholder='Search for a recipe...'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit'>Search</button>
        </form>
    )

}

export default SearchBar