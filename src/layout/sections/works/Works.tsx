import styled from "styled-components";
import sendPay from "../../../assets/images/webp/sendPay.webp";
import commerce from "../../../assets/images/webp/e-commerce.webp";
import edtech from "../../../assets/images/webp/Edtech.webp";
import {Work} from "./work/Work.tsx";
import {FlexWrapper} from "../../../components/FlexWrapper.tsx";
import {SectionTitle} from "../../../components/SectionTitle.tsx";
import {Container} from "../../../components/Container.ts";
import ellipse_black from '../../../assets/images/png/Ellipse_black.png'
import ellipse_green from '../../../assets/images/png/Ellipse_green.png'
import ellipse_violet from '../../../assets/images/png/Ellipse_violet.png'

export function Works() {
    return (
        <StyledWorks id="portfolio">
            <Container>
                <SectionTitle normal={"My"} bold={"Portfolio"}/>
                <FlexWrapper justify="space-between" wrap="wrap">
                    <Work src={sendPay} alt="sendPay" title={"SendPay"}  colorTitle={"#6C63FF"} isIcon={true} background={ellipse_violet}/>
                    <Work src={commerce} alt="commerce" title={"E - Commerce"}  colorTitle={"#4581F6"} after={"Website"} background={ellipse_green}/>
                    <Work src={edtech} alt="edtech" title={"BeatsLearning"} colorTitle={"black"} before={'A symphony of skills'} background={ellipse_black}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`