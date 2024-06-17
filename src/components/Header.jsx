import s from './Header.module.css';

const Header = ({children}) => {
    return (
        <header className={s.header}>
            <nav className={s.navbar}>
                {children}
                <div></div>
            </nav>
        </header>
    );
}

export { Header };
