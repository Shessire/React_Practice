
function Main () {

    function handleClick (e) {
        e.preventDefault();
        console.log("Clicked!")
    }

    function handleHover () {
        console.log("Hovered!")
    }

    return (
        <div className="Main">
            <form className="add-ingredient-form">
                <input 
                    type="text"
                    placeholder="e.g. pepper"
                    aria-label="Add ingredient" 
                />
                <button onClick={handleClick} onMouseOver={handleHover}>Add ingredient</button>
            </form>
        </div>
    )
}

export default Main;