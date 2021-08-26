import {FC} from "react";
import {ButtonColors} from "./types/ButtonColors";
import {Props} from "./props";
import './styles.scss';
import classNames from 'classnames';

export const Button: FC<Props> = ({color, children, className, style, type, isBlock}: Props) => {
    return (
        <button
            className={classNames(['btn', `btn-${color}`, isBlock && 'block', className])}
            style={style}
            type={type}
        >{children}</button>
    )};

Button.defaultProps = {
    color: ButtonColors.Green
}
