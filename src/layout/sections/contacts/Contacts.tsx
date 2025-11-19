import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import { FlexWrapper } from "../../../components/FlexWrapper.tsx";
import {Contact} from "./contact/Contact.tsx";
import {Icon} from "../../../components/icon/Icon.tsx";
import {Container} from "../../../components/Container.ts";

export function Contacts() {
    return (
        <StyledContact id="contacts">
            <Container>
                <SectionTitle normal={"Contact"} bold={"Me"}/>
                <FlexWrapper justify="space-between" wrap="wrap">
                    <Contact svg={<Icon iconId={"github"}></Icon>} title={"Github"} href={"https://github.com/viaya-ya"}/>
                    <Contact svg={<Icon iconId={"instagram"}></Icon>} title={"Instagram"} href={"https://www.instagram.com/viaya_ya_ya"}/>
                    <Contact svg={<Icon iconId={"email"}  width={"86"} height={"46"} viewBox={"0 0 86 46"}></Icon>} title={"Email"} href={"mailto: viaya.lysenko@mail.ru"}/>
                    <Contact svg={<Icon iconId={"call"}></Icon>} title={"Telp"} href={"tel:+79787512027"}/>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section``
