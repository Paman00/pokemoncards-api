import { RxExternalLink } from "react-icons/rx";
import s from "./style.module.css";

const Footer = () => {
	return (
		<footer className={s.footer}>
			<div className={s.divFooter}>
				<p>
					Using the{" "}
					<a 
                        className={s.anchor}
                        href="https://dev.pokemontcg.io/" 
                        target="_blank"
                    >
						Pokémon TGC API <RxExternalLink />
					</a>
				</p>
			</div>
			<hr className={s.hr}/>
			<div className={s.divFooter}>
				<h5>
					© 2023 | Developed and designed by{" "}
					<a
                        className={s.anchor}
						href="https://www.linkedin.com/in/miguel-%C3%A1ngel-garc%C3%ADa-beltr%C3%A1n-275789231/"
						target="_blank"
					>
						Miguel Angel Garcia Beltrán <RxExternalLink />
					</a>
				</h5>
			</div>
		</footer>
	);
};

export { Footer };
