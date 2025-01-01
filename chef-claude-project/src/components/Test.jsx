import React from "react"

export default function Test() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    function toggleFavorite() {
        setContact((prev) => ({
            ...prev,
            isFavorite: !prev.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={
                            contact.isFavorite
                                ? "Remove from favorites"
                                : "Add to favorites"
                        }
                        className="favorite-button"
                    >
                        <img
                            src={contact.isFavorite ? starFilled : {starEmpty}}
                            alt={contact.isFavorite ? "Filled star icon" : "Empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}