import { useState } from "react"

export default function Challenge () {

    const [messages, setMessages] = useState(["a", "b"])

    const messageText =
        messages.length === 0 
        ? "You're all caught up" 
        : `You have ${messages.length} unread message${messages.length > 1 ? "s" : ""}`
        

    return (
        <div>
            <h1>
                {messageText}
            </h1>
        </div>
    )
}