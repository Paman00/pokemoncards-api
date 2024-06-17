import { RxExternalLink } from "react-icons/rx";
import s from "./Footer.module.css";

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
						href="https://www.linkedin.com/in/angel-garcia-beltran"
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
