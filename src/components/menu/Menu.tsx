import styled from "styled-components";

export function Menu() {
    return (
        <StyledMenu>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Passions</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Contact Me</a></li>
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