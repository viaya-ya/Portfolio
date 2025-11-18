import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import {Contact} from "./contact/Contact.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";

export function Contacts() {
    return (
        <StyledContact>
            <SectionTitle>Contact Me</SectionTitle>
            <FlexWrapper justify="space-between" wrap="wrap">
                <Contact svg={<Icon iconId={"github"}></Icon>} title={"Github"}/>
                <Contact svg={<Icon iconId={"instagram"}></Icon>} title={"Instagram"}/>
                <Contact svg={<Icon iconId={"email"}  width={"86"} height={"46"} viewBox={"0 0 86 46"}></Icon>} title={"Email"}/>
                <Contact svg={<Icon iconId={"call"}></Icon>} title={"Telp"}/>
            </FlexWrapper>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 100vh;
    background-color: grey;
`
