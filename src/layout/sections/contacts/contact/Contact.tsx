import styled from "styled-components";
import React from "react";
import circleFon from "../../../../assets/svg/circleFon.svg";

type Props = {
    svg: React.ReactNode;
    title: string;
};

export function Contact(props: Props) {
    return (
        <StyledContact href="#">
            <article>
                <ContactBackgroundImage>
                    {props.svg}
                </ContactBackgroundImage>
                <ContactTitle>{props.title}</ContactTitle>
            </article>
        </StyledContact>
    );
};

const StyledContact = styled.a`
    width: 100%;
    max-width: 240px;
    border: 1px solid aqua;
`
const ContactTitle = styled.h3``

const ContactBackgroundImage = styled.div`
    background-image: url(${circleFon});
`

