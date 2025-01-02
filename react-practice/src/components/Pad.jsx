import { useState } from "react"

export default function Pad ({ color, on }) {

    const [isOn, setIsOn] = useState(on)

    function handleToggle () {
        setIsOn((prev) => !prev)
    }

    return (
        <div>
            <button 
                style={{ backgroundColor: color }}
                onClick={handleToggle}
                className={isOn ? "on" : ""}
            >      
            </button>   
        </div>
    )
}