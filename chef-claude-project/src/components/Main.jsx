import { useState } from "react";

function Main () {

    const [button, setButtton] = useState("Yes")

    const [isGoingOut, setIsGoingOut] = useState(true)

    function handleClick () {
        setButtton((prevState) => (prevState === "Yes" ? "No" : "Yes"))
    }

    function handleToggle () {
        setIsGoingOut((prevState) => (
            prevState === true ? false : true
        ))
    }


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
            <button onClick={handleClick}>{button}</button>
            <button onClick={handleToggle} aria-label={`Current answer is ${isGoingOut === true ? "Yes" : "No"}. Click to change it`}>{isGoingOut === true ? "Yes" : "No"}</button>
        </div>
    )
}

export default Main;