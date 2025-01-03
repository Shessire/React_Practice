import { useState } from "react";

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
            {ingredient.length > 0 
            ?
                <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredient.map((i, index) => (
                            <li key={index}>{i}</li>
                        ))}
                    </ul>
                    {ingredient.length > 2 
                    ?
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={toggle}>Get a recipe</button>
                        </div>
                    : null
                    }
                </section>
            : null
            }
            {
                recipeShown 
                ? <h1>This will be shown if u hit the button!</h1>
                : null
            }
        </div>
    )
}

export default Main;