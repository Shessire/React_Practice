const ingredients = ["Chicken", "Pepper", "Tomatoes"]

function Main () {

    return (
        <div className="Main">
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. pepper"
                    aria-label="Add ingredient"
                    name="ingredient" 
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredients.map((i) => (
                    <li key={i}>{i}</li>
                ))}
            </ul>
        </div>
    )
}

export default Main;