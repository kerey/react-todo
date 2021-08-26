import {ButtonColors} from "./types/ButtonColors";
import {ButtonHTMLAttributes, HTMLAttributes, RefAttributes} from "react";

export type Props = RefAttributes<HTMLButtonElement> &
    ButtonHTMLAttributes<HTMLButtonElement> &
    {
        color?: ButtonColors;
        isBlock?: boolean;
    };
