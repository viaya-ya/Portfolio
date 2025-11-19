import styled from "styled-components";
import main from "../../../assets/images/webp/main.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";
import {Theme} from "../../../styles/Theme.ts";

export function Main() {
    return (
        <StyledMain id="passions">
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <FlexWrapper direction={"column"}>
                        <Hello>Hi !</Hello>

                        <Name>
                            I’m Lysenko Valeriy.
                        </Name>

                        <Title>
                            a Front-End Developer
                        </Title>

                        <Descriprion>
                            Front-End devel oper based in Bekasi, Indonesian
                            I’am coding with a clean and beautiful problem
                            solving in mind.
                        </Descriprion>
                    </FlexWrapper>
                    <Photo src={main} alt="main"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
`

const Hello = styled.span`
    font-weight: 400;
    font-size: 35px;
    color: ${Theme.colors.primary};
    margin-top: 45px;
`
const Name = styled.span`
    font-weight: 600;
    font-size: 50px;
    color: ${Theme.colors.primary};
`
const Title = styled.h1`
    font-weight: 600;
    font-size: 50px;
    color: ${Theme.colors.primary};
    margin-bottom: 25px;
`
const Descriprion = styled.p`
    font-weight: 400;
    font-size: 23px;
    line-height: 1.5;
    color: ${Theme.colors.blackMain};
`
const Photo = styled.img`
    width: 500px;
    height: 468px;
    object-fit: cover;
`