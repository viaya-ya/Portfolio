import styled from "styled-components";
import main from "../../../assets/images/webp/main.webp";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";

export function Main() {
    return (
        <StyledMain>
            <FlexWrapper align={"center"} justify={"space-between"}>
                <div>
                    <h1>
                        Hi ! I’m Muhamad Raul. a Front-End Developer
                    </h1>

                    <p>
                        Front-End devel oper based in Bekasi, Indonesian
                        I’am coding with a clean and beautiful problem
                        solving in mind.
                    </p>
                </div>
                <Photo src={main} alt="main"/>
            </FlexWrapper>
        </StyledMain>
    );
};

const StyledMain = styled.main`
    min-height: 100vh;
    background-color: rosybrown;
`

const Photo = styled.img`
    width: 500px;
    height: 468px;
    object-fit: cover;
`