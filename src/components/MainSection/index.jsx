import s from "./style.module.css";

const MainSection = ({ children }) => {
    return (
        <section className={s.mainSection}>
            {children}
        </section>
    )
}

export { MainSection };
