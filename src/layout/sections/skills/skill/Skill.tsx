import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";

type Props = {
    src: string;
    alt: string;
    title: string[];
    description: string;
};

export function Skill(props: Props) {
    return (
        <StyledSkill>
            <FlexWrapper direction="column" justify="center" align={"center"}>
                <SkillImage src={props.src} alt={props.alt}/>
                <SkillTitle>{props.title[0]} <span>{props.title[1]}</span> </SkillTitle>
                <SkillText>{props.description}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.article`
    width: 100%;
    max-width: 348px;
    border-radius: 14px;
    padding: 20px 20px 24px 20px;
    box-shadow: 0px 5px 26px 5px #0000002B;
`
const SkillImage = styled.img`
    width: 225px;
    object-fit: cover;
    margin-bottom: 18px;
`
const SkillTitle = styled.h3`
    font-weight: 600;
    font-size: 25px;
    text-align: center;
    margin-bottom: 15px;
    span {
        font-weight: 400;
    }

`
const SkillText = styled.p`
    font-weight: 400;
    font-size: 18px;
    text-align: center;
`
