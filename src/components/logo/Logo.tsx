import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";

export function Logo() {
    return (
        <StyledLogo href="">
            <LeftLogo>Val</LeftLogo>
            <RightLogo>eriy</RightLogo>
        </StyledLogo>
    );
};

const StyledLogo = styled.a`
    letter-spacing: 0.205em;
`
const LeftLogo = styled.span`
    font-size: 25px;
    font-weight: 700;
    color: ${Theme.colors.primary};
`
const RightLogo = styled.span`
    font-size: 25px;
    font-weight: 400;
    color: ${Theme.colors.secondary};
`