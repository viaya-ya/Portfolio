import styled from "styled-components";

export const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    min-height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    
    //outline: 1px solid red;

    position: relative;

    &::before {
        position: absolute;
        content: "";
        top: 5%;
        left: 20%;
        width: 200px;
        height: 210px;
        border-radius: 50%;
        background-color: red;
        opacity: 0.2;
        filter: blur(25px); /* регулируй значение по вкусу */
        z-index: -1;
    }

    &::after {
        position: absolute;
        content: "";
        bottom: -30%;
        right: 18%;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: red;
        opacity: 0.2;
        filter: blur(25px); /* регулируй значение по вкусу */
        z-index: -1;
    }
    
`