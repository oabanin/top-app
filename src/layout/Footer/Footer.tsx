import React from 'react';
import s from './Footer.module.scss';
import {FooterProps} from "./Footer.props";
import cn from "classnames";

const Footer = ({...rest}: FooterProps): JSX.Element => {
    return (
       <div {...rest}>
           Footer
       </div>
    );
};

export default Footer;
