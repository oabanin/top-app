import React from 'react';
import s from './Button.module.scss';
import {ButtonProps} from "./Button.props";
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

const Button = ({appearance, children, className, arrow = "none", ...props}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(s.button, className, {
            [s.primary]: appearance === "primary",
            [s.ghost]: appearance === "ghost"
        })} {...props}>
            {children}
            {arrow !== "none" && <span
              className={cn(s.arrow, {[s.down]: arrow === "down"}, {[s.right]: arrow === "right"})}> <ArrowIcon/></span>}
        </button>
    );
};

export default Button;
