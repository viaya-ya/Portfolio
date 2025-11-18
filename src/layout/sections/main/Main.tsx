import styled from "styled-components";
import main from "../../../assets/images/webp/main.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {Container} from "../../../components/Container.ts";

export function Main() {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <span>Hi !</span>
                        <h1>
                            I’m Muhamad Raul. a Front-End Developer
                        </h1>

                        <p>
                            Front-End devel oper based in Bekasi, Indonesian
                            I’am coding with a clean and beautiful problem
                            solving in mind.
                        </p>
                    </div>
                    <Photo src={main} alt="main"/>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    display: flex;
`

const Photo = styled.img`
    width: 500px;
    height: 468px;
    object-fit: cover;
`