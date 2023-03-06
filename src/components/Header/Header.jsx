import './style.module.css';

const Header = ({children}) => {
    return (
        <header className="header">
            <nav className="navbar">
                {children}
                <div></div>
            </nav>
        </header>
    );
}

export { Header };
