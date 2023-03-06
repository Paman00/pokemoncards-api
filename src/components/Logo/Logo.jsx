import styled from "styled-components";

const StyledLogo = styled.img`
    width: 100%;
    border-radius: 20%;
`;
const StyledFigure = styled.figure`
    width: 55px;
    height: 55px;
    margin: 0;
`;

const Logo = () => {
    return (
        <StyledFigure>
            <StyledLogo src={`src/assets/images/DALLE_Logo.png`} alt="" />
        </StyledFigure>
    )
}

export { Logo };
