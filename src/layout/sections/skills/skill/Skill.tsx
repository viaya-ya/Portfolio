import styled from "styled-components";

type Props = {
    src: string;
    alt: string;
    title: string;
    description: string;
};

export function Skill(props: Props) {
    return (
        <StyledSkill>
            <SkillImage src={props.src} alt={props.alt}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.article`
    width: 100%;
    max-width: 348px;
    border: 1px solid aqua;
`
const SkillImage = styled.img`
    width: 100%;
    height: 160px;
    object-fit: cover;
`
const SkillTitle = styled.h3``
const SkillText = styled.p``
