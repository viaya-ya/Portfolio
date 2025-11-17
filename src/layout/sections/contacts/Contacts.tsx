import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import {Contact} from "./contact/Contact.tsx";

export function Contacts() {
    return (
        <StyledContact>
            <SectionTitle>Contact Me</SectionTitle>
            <FlexWrapper justify="space-between" wrap="wrap">
                <Contact svg={<Icon iconId={"github"}/>} title={"Github"}/>
                <Contact svg={<Icon iconId={"instagram"}/>} title={"Instagram"}/>
                <Contact svg={<Icon iconId={"email"}/>} title={"Email"}/>
                <Contact svg={<Icon iconId={"call"}/>} title={"Telp"}/>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 100vh;
    border: 1px solid black;
`
