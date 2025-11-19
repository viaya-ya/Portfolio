import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";
import {ButtonLink} from "../ButtonLink.ts";

export function Menu() {
    return (
        <StyledMenu>
            <ul>
                <li><Link href="#about">About</Link></li>
                <li><Link href="#passions">Passions</Link></li>
                <li><Link href="#portfolio">Portfolio</Link></li>
                <li><ButtonLink href="#contacts">Contact Me</ButtonLink></li>
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
ul{
    display: flex;
    align-items: center;
    column-gap: 45px;
    
}
`

const Link = styled.a`
    position: relative;

    font-size: 25px;
    color: ${Theme.colors.blackHeader};

    &:hover {
        color: ${Theme.colors.secondary};
    }
    
    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 0;
        background-color: ${Theme.colors.secondary};
        transition: width 0.3s ease;
    }
    
    &:hover:before {
        width: 100%;
    }
`