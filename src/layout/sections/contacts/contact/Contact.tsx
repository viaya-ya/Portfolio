import * as React from "react";
import styled from "styled-components";
import circleFon from "../../../../assets/images/svg/circleFon.svg";

type Props = {
    svg: React.ReactNode;
    title: string;
};

export function Contact(props: Props) {
    return (
        <StyledContact href="#">
            <ContactArticle>
                <IconWrapper>
                    <img src={circleFon} alt=""/>
                    {props.svg}
                </IconWrapper>
                <ContactTitle>{props.title}</ContactTitle>
            </ContactArticle>
        </StyledContact>
    );
};

const StyledContact = styled.a`
    width: 100%;
    max-width: 240px;
    border: 1px solid aqua;
`
const IconWrapper = styled.div`
    position: relative;
    width: 166px;
    height: 160px;

    img {
        width: 100%;
        height: 100%;
        display: block;
    }

    svg {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        pointer-events: none;
    }
`
const ContactTitle = styled.h3``
const ContactArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`