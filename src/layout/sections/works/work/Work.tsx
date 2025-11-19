import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

type WorkProps = {
    isIcon?: boolean;
    src: string;
    alt: string;
    title: string;
};

export function Work(props: WorkProps) {
    return (
        <StyledWork>
            <FlexWrapper direction={"column"}>
                <SkillTitle>
                    {
                        props.isIcon
                            ? <Icon iconId="emojione" height="51" width="51" viewBox="0 0 51 51"/>
                            : null
                    }
                    <span>{props.title}</span>
                </SkillTitle>
                <IconWrapper>
                    <SkillImage src={props.src} alt={props.alt}/>
                </IconWrapper>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.article`
    width: 100%;
    max-width: 348px;

    border-radius: 10px;
    padding: 16px 12px 16px 15px;
    box-shadow: 0px 6px 30px 1px #00000040;

`
const SkillTitle = styled.h3`
    border: 1px solid red;

    display: flex;
    align-items: center;

    //font-family: Montserrat;
    font-weight: 600;
    font-size: 25px;

    color: #6C63FF;
`
const SkillImage = styled.img`
    width: 290px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0px 1px 7px 2px #00000040;
`
const IconWrapper = styled.div`
    position: relative;
    align-self: flex-end;
    
    &::before {
        content: '';
        position: absolute;
        top: -35%;
        left: -10%;
        display: inline-block;
        width: 195px;
        height: 195px;
        background-color: #6C63FF;
        border-radius: 50%;
        opacity: 0.25;
        z-index: -1;
    }
`