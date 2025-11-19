import styled from "styled-components";
import addittional1 from "../../../assets/images/webp/additional_1.webp";
import addittional2 from "../../../assets/images/webp/additional_2.webp";
import addittional3 from "../../../assets/images/webp/additional_3.webp";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";

export function Skills() {
    return (
        <StyledSkills id="skills">
            <Container>
                <SectionTitle normal={"Additional"} bold={"passions"}/>
                <FlexWrapper justify="space-between" wrap="wrap">
                    <Skill src={addittional1} alt="additional_1" title={["Front-End", "Developer"]}
                           description={"(Sass, Bootstrap, Tailwind)"}/>

                    <Skill src={addittional2} alt="additional_2" title={["Back-End", "Developer"]}
                           description={"(NodeJS, Laravel, Codeigniter)"}/>

                    <Skill src={addittional3} alt="additional_3" title={["UI/UX", "Designer"]}
                           description={"(Figma, Zeplin, Adobe XD)"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
`
