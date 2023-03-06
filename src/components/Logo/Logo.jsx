import styled from "styled-components";

const StyledLogo = styled.img`
    width: 100%;
    border-radius: 25%;
`;
const StyledFigure = styled.figure`
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    width: 45px;
    height: 45px;
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
