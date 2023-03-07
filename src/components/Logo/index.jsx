import { StyledFigure, StyledLogo } from "./StyledLogo";
import imgLogo from "../../assets/images/DALLE_Logo.png";

const Logo = () => {
	return (
		<StyledFigure>
			<StyledLogo src={imgLogo} alt="Pokemon logo" />
		</StyledFigure>
	);
};

export { Logo };
