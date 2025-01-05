export default function IngredientList ({ ingredient, getRecipe }) {
    return (
        <div>
            <section>
                    <h2>Ingredients on hand:</h2>
                    <ul className="ingredients-list" aria-live="polite">
                        {ingredient.map((i) => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                    {ingredient.length > 2 
                    ?
                        <div className="get-recipe-container">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Generate a recipe from your list of ingredients.</p>
                            </div>
                            <button onClick={getRecipe}>Get a recipe</button>
                        </div>
                    : null
                    }
            </section>
        </div>
    )
}