import styled from "styled-components";

type WorkProps = {
    src: string;
    alt: string;
    title: string;
};

export function Work(props:WorkProps) {
    return (
        <StyledWork>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillImage src={props.src} alt={props.alt}/>
        </StyledWork>
    );
};

const StyledWork = styled.article`
    width: 100%;
    max-width: 348px;
    border: 1px solid aqua;
`
const SkillTitle = styled.h3``
const SkillImage = styled.img`
    width: 290px;
    object-fit: contain;
`