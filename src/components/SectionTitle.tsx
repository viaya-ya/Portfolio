import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

type Props = {
    normal: string;
    bold: string;
}
export function SectionTitle(props: Props) {
    return (
        <StyledSectionTitle>{props.normal} <span>{props.bold}</span> </StyledSectionTitle>
    );
};

export const StyledSectionTitle = styled.h2`
    text-align: center;
    
    font-weight: 400;
    font-size: 35px;
    color: ${Theme.colors.primary};
    letter-spacing: 0.15em;
    
    margin-bottom: 60px;
    
    span {
        font-weight: 600;
        font-size: 35px;
    }
`