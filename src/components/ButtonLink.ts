import styled from "styled-components";
import {Theme} from "../styles/Theme.ts";

export const ButtonLink = styled.a`
    width: 196px;
    height: 58px;
    font-size: 25px;
    font-weight: 600;
    padding: 10px 18px;
    letter-spacing: 0.055em;
    color: ${Theme.colors.white};
    background-color: ${Theme.colors.button};
    border-radius: 10px;
`