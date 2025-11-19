import {Logo} from "../../components/logo/Logo.tsx";
import {Menu} from "../../components/menu/Menu.tsx";
import styled from "styled-components";
import {Container} from "../../components/Container.ts";
import {FlexWrapper} from "../../components/FlexWrapper.tsx";


export function Header() {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={"space-between"} align={"center"}>
                    <Logo></Logo>
                    <Menu></Menu>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    //position: fixed;
    //top: 0;
    //left: 0;
    //right: 0;
    padding: 14px 0;
    margin-top: 35px;
    margin-bottom: 40px;
    //outline: 1px solid blue;
    z-index: 9999;
`