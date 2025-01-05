import { useState } from "react";
import Recipe from "./Recipe";
import IngredientList from "./IngredientList";
import Intro from "./Intro";
import { getRecipeFromMistral } from "../../ai";

function Main () {

    const [ingredient, setIngredient] = useState([])
    const [inputValue, setInputValue] = useState("")
    const [recipe, setRecipe] = useState("")

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

    function reset () {
        setIngredient([])
        setInputValue("")
        setRecipe("")
    }

    async function getRecipe () {
        const recipeMarkDown = await getRecipeFromMistral(ingredient)
        setRecipe(recipeMarkDown)
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
                <button className="reset-btn" type="button" onClick={reset}>Reset</button>
            </form>
            <Intro />            
            <hr />
            {
                ingredient.length > 0 
                ? <IngredientList ingredient={ingredient} getRecipe={getRecipe} />                
                : null
            }
            {
                recipe
                ? <Recipe recipe={recipe} />
                : null
            }
        </div>
    )
}

export default Main;