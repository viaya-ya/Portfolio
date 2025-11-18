import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";
import {ButtonLink} from "../ButtonLink.ts";

export function Menu() {
    return (
        <StyledMenu>
            <ul>
                <li><Link href="">About</Link></li>
                <li><Link href="">Passions</Link></li>
                <li><Link href="">Portfolio</Link></li>
                <li><ButtonLink href="">Contact Me</ButtonLink></li>
            </ul>

        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
ul{
    display: flex;
    align-items: center;
    column-gap: 45px;

    border: 1px solid blue;
}
`

const Link = styled.a`
    font-size: 25px;
    color: ${Theme.colors.blackHeader};
`