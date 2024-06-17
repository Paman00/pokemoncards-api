import imgLogo from "../assets/images/DALLE_Logo.png";
import s from "./Logo.module.css";

const Logo = () => {
	return (
		<figure class={s.imgContainer}>
			<img class={s.logo} src={imgLogo} alt="Pokemon logo" />
		</figure>
	);
};

export { Logo };
