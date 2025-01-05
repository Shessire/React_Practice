import { useState } from "react";
import Recipe from "./Recipe";
import IngredientList from "./IngredientList";
import { getRecipeFromMistral } from "../ai";

function Main () {

    const [ingredient, setIngredient] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [recipeShown, setRecipeShown] = useState(false)

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

    function toggle () {
        setRecipeShown(prev => !prev)
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
            {
                ingredient.length > 0 
                ? <IngredientList ingredient={ingredient} toggle={toggle} />                
                : null
            }
            {
                recipeShown
                ? <Recipe />
                : null
            }
        </div>
    )
}

export default Main;