import { useState } from "react"

export default function Pad ({ color, on, click, id }) {

    return (
        <div>
            <button 
                style={{ backgroundColor: color }}
                onClick={() => click(id)}
                className={on ? "on" : undefined}
            >      
            </button>   
        </div>
    )
}