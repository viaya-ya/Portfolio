import iconSprite from "../../assets/images/svg/sprite.svg"

 export type IconProps = {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?: string;
};

export function Icon(props: IconProps) {
    return (
        <svg width= {props.width || "84"} height= {props.height ||"83" } viewBox= {props.viewBox || "0 0 84 83"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}></use>
        </svg>
    );
};