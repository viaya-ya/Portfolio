import styled from "styled-components";


export function Footer() {
    return (
        <StyledFooter>
            <Name>Design By Rauliqbal</Name>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    min-height: 20vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(69, 129, 246, 1);
`
const Name = styled.span`
`