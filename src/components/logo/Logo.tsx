import {Icon} from "../icon/Icon.tsx";
import styled from "styled-components";

export function Logo() {
    return (
        <StyledLogo>
            <Icon iconId={"logo"} width={"118"} height={"26"} viewBox={"0 0 118 26"}/>
        </StyledLogo>
    );
};
const StyledLogo = styled.div`
    min-width: 162px 
`