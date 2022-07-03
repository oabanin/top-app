import React from 'react';
import s from './Button.module.scss';
import {ButtonProps} from "./Button.props";
import cn from 'classnames';

const Button = ({appearance, children}: ButtonProps): JSX.Element => {
    return (
        <button className={cn(s.button, {[s.primary]: appearance === "primary", [s.ghost]: appearance === "ghost"})}>
            {children}
        </button>
    );
};

export default Button;
