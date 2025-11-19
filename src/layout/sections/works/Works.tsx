import styled from "styled-components";
import sendPay from "../../../assets/images/webp/sendPay.webp";
import commerce from "../../../assets/images/webp/e-commerce.webp";
import edtech from "../../../assets/images/webp/Edtech.webp";
import {Work} from "./work/Work.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.ts";

export function Works() {
    return (
        <StyledWorks id="portfolio">
            <Container>
                <SectionTitle normal={"My"} bold={"Portfolio"}/>
                <FlexWrapper justify="space-between" wrap="wrap">
                    <Work src={sendPay} alt="sendPay" title={"SendPay"} isIcon={true}/>
                    <Work src={commerce} alt="commerce" title={"E - Commerce"}/>
                    <Work src={edtech} alt="edtech" title={"Edtech"}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`