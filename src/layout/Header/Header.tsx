import React from 'react';
import s from './Header.module.scss';
import {HeaderProps} from "./Header.props";
import cn from "classnames";

const Header = ({...rest}: HeaderProps): JSX.Element => {
    return (
       <div {...rest}>
           Header
       </div>
    );
};

export default Header;
