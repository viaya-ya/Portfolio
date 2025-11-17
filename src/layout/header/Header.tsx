import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";


export function Header() {
    return (
        <StyledHeader>
           <Logo></Logo>
           <Menu></Menu>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    height: 84px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid red;
`