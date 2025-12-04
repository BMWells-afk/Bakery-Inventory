import './Header.css';

const Logo = () => (
    <img src="/bakery-logo.png" alt="Bakery Logo" className="logo-image" />
);

const Header = () => {
    return (
        <header className="header">
            <div className="logo-container">
                <Logo />
            </div>
            <h1 className="header-title">My Bakery Inventory</h1>
        </header>
    )
}

export default Header;
