import { useState } from "react";

function Main () {

    return (
        <div className="Main">
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. pepper"
                    aria-label="Add ingredient"
                    name="ingredient" 
                />
                <button>Add ingredient</button>
            </form>
        </div>
    )
}

export default Main;