import styled from "styled-components";
import imgLogo from "../../assets/images/DALLE_Logo.png";

const StyledLogo = styled.img`
    width: 100%;
    border-radius: 25%;
`;
const StyledFigure = styled.figure`
    display: flex;
    align-items: center;
    padding: 0 0.5rem;
    width: 45px;
    height: 45px;
    margin: 0;
`;

const Logo = () => {
    return (
        <StyledFigure>
            <StyledLogo src={imgLogo} alt="Pokemon logo" />
        </StyledFigure>
    )
}

export { Logo };
