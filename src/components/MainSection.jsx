import s from "./MainSection.module.css";

const MainSection = ({ children }) => {
    return (
        <section className={s.mainSection}>
            {children}
        </section>
    )
}

export { MainSection };
