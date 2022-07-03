import React from 'react';
import s from './P.module.scss';
import {PProps} from "./P.props";
import cn from "classnames";

const P = ({size = "M", children, className, ...rest}: PProps): JSX.Element => {
    return (
        <p className={cn(s.p, className, {
            [s.small]: size === "S",
            [s.medium]: size === "M",
            [s.large]: size === "L",
        })} {...rest}>
            {children}
        </p>
    );
};

export default P;
