import { useState } from "react";

function Main () {

    const [ingredient, setIngredient] = useState([])
    const [inputValue, setInputValue] = useState("")

    function handleOnChange (e) {
        setInputValue(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()
        if (inputValue.trim()) {
            setIngredient((prevIngredients) => [...prevIngredients, inputValue]);
            setInputValue("");
        }

    }

    return (
        <div className="Main">
            <form onSubmit={handleSubmit} className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. pepper"
                    aria-label="Add ingredient"
                    name="ingredient"
                    value={inputValue}
                    onChange={handleOnChange} 
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredient.map((i, index) => (
                    <li key={index}>{i}</li>
                ))}
            </ul>
        </div>
    )
}

export default Main;