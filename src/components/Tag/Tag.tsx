import React from 'react';
import s from './Tag.module.scss';
import {TagProps} from "./Tag.props";
import cn from "classnames";

const Tag = ({size = "S", className, children, color = "ghost", href, ...rest}: TagProps): JSX.Element => {
    return (
        <div className={cn(s.tag, className, {
            [s.small]: size === "S",
            [s.medium]: size === "M",
            [s.ghost]: color === "ghost",
            [s.red]: color === "red",
            [s.green]: color === "green",
            [s.gray]: color === "gray",
            [s.primary]: color === "primary",
        })} {...rest}>
            {href ? <a href={href}>{children}</a> : <>{children}</>}
        </div>
    );
};

export default Tag;
