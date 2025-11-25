import styled from "styled-components";
import addittional1 from "../../../assets/images/webp/additional_1.webp";
import addittional2 from "../../../assets/images/webp/additional_2.webp";
import addittional3 from "../../../assets/images/webp/additional_3.webp";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Skill} from "./skill/Skill.tsx";
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../styles/Theme.ts";

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
    position: relative;

    &::before {
        position: absolute;
        content: "";
        top: 5%;
        left: 12%;
        width: 115px;
        height: 100px;
        border-radius: 50%;
        background-color: ${Theme.colors.backgroundElement};
        opacity: 0.2;
        filter: blur(25px); /* регулируй значение по вкусу */
        z-index: -1;
    }

    &::after {
        position: absolute;
        content: "";
        bottom: -30%;
        left: 55%;
        width: 200px;
        height: 210px;
        border-radius: 50%;
        background-color: ${Theme.colors.backgroundElement};
        opacity: 0.2;
        filter: blur(25px); /* регулируй значение по вкусу */
        z-index: -1;
    }
`
