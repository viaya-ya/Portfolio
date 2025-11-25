import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper.tsx";
import {Icon} from "../../../../components/icon/Icon.tsx";

type WorkProps = {
    isIcon?: boolean;
    src: string;
    alt: string;
    title: string;
    background: string;
    before?: string;
    after?: string;
    colorTitle?: string;
};

export function Work(props: WorkProps) {
    return (
        <StyledWork background={props.background}>
            <FlexWrapper direction={"column"}>
                <SkillTitle isIcon={props.isIcon} colorTitle={props.colorTitle} before={props.before}
                            after={props.after}>
                    {props.isIcon && (
                        <Icon iconId="emojione" height="51" width="51" viewBox="0 0 51 51"/>
                    )}
                    <span>{props.title}</span>
                </SkillTitle>
                <SkillImage src={props.src} alt={props.alt}/>
            </FlexWrapper>
        </StyledWork>
    );
};

const StyledWork = styled.article<{ background: string }>`
    width: 100%;
    max-width: 348px;

    border-radius: 10px;
    padding: 16px 12px 16px 15px;
    box-shadow: 0px 6px 30px 1px #00000040;

    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: 16px 18px;
`;

const SkillTitle = styled.h3<{ isIcon?: boolean, colorTitle?: string, before?: string; after?: string }>`
    height: 52px;
    
    display: flex;
    align-items: center;

    font-weight: 600;
    font-size: 25px;

    color: ${props => props.colorTitle || "#6C63FF"};

    span {
        position: relative;
        margin-left: ${props => props.isIcon ? "14px": null};

        &::after {
            content: "${props => props.after || ""}" " ${props => props.before || ""}";
            left: ${props => props.before ? 0 : " "};
            right: ${props => props.after ? 0 : " "};
            font-size: 13px;

            position: absolute;
            bottom: -15px;
            //font-family: Montserrat;
            font-weight: 600;

        }
    }
`;

const SkillImage = styled.img`
    width: 290px;
    object-fit: cover;
    border-radius: 6px;
    box-shadow: 0px 1px 7px 2px #00000040;
    align-self: flex-end;
`