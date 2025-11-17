import styled from "styled-components";
import sendPay from "../../../assets/webp/sendPay.webp";
import commerce from "../../../assets/webp/e-commerce.webp";
import edtech from "../../../assets/webp/Edtech.webp";
import {Work} from "./work/Work.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";

export function Works() {
    return (
        <StyledWorks>
            <SectionTitle>My Portfolio</SectionTitle>
            <FlexWrapper justify="space-between" wrap="wrap">
                <Work src={sendPay} alt="sendPay" title={"Front-End Developer"}/>
                <Work src={commerce} alt="commerce" title={"Back-End Developer"}/>
                <Work src={edtech} alt="edtech" title={"UI/UX Designer"}/>
            </FlexWrapper>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
`