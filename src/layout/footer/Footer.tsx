import styled from "styled-components";
import {Theme} from "../../styles/Theme.ts";
import footer from "../../assets/images/png/footer.png";


export function Footer() {
    return (
        <StyledFooter>
                <Name>Design By Valeriy</Name>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    height: 330px;
    
    display: flex;
    justify-content: center;
    align-items: flex-end;
    
    background-image: url(${footer});
    background-position: center;
    background-repeat: no-repeat;
`
const Name = styled.span`
    font-weight: 400;
    font-size: 35px;
    letter-spacing: 0.2rem;
    color: ${Theme.colors.white};
    margin-bottom: 20px;
`