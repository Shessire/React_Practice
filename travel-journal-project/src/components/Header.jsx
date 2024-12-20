import PublicIcon from '@mui/icons-material/Public';

function Header () {
    return (
        <header className="Header" style={{ backgroundColor: "red"}}>
            <PublicIcon fontSize='large' />
            <h1>my travel journal</h1>
        </header>
    )
}

export default Header;