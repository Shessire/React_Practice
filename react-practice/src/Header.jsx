export default function Header () {
    return (
        <header className="Header">
            <img src="/src/assets/react.svg" className="react-logo" alt="React logo" />
            <nav>
                <ul className="navbar">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}