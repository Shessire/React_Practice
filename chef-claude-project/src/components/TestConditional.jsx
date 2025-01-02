import { useState } from "react"

export default function TestConditional ({ props }) {
    
    const [isShown, setIsShown] = useState(false)

    function toggle () {
        setIsShown((prev) => !prev)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>
                {isShown ? "Hide punchline" : "Show punchline"}
            </button>
            <hr />
        </div>
    )
}