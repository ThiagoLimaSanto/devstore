import "./Header.css"

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h1>DevClub Store</h1>
            </div>
            <nav className="navbar">
                <ul>
                    <li>Home</li>
                    <li>Produtos</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
