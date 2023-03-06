import { RxExternalLink } from "react-icons/rx";

const Footer = () => {
    return (
        <footer>
            <div>
                <p>Using the <a href="https://dev.pokemontcg.io/" target="_blank">Pokémon TGC API <RxExternalLink /></a></p>
            </div>
            <hr />
            <div>
                <h5>© 2023 | Developed and designed by <a href="https://www.linkedin.com/in/miguel-%C3%A1ngel-garc%C3%ADa-beltr%C3%A1n-275789231/" target="_blank">Miguel Angel Garcia Beltrán <RxExternalLink /></a></h5>
            </div>
        </footer>
    );
}

export { Footer };
