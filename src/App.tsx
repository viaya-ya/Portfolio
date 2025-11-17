import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Works} from "./layout/sections/works/Works.tsx";
import {Contacts} from "./layout/sections/contacts/Contacts.tsx";
import {Footer} from "./layout/footer/Footer.tsx";

function App() {
    return (
        <StyledWrapper>
            <Header/>
            <Main></Main>
            <Skills></Skills>
            <Works></Works>
            <Contacts></Contacts>
            <Footer></Footer>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`

    border: 1px solid green;

    display: flex;
    flex-direction: column;
`
export default App
