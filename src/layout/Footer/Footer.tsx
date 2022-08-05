import React from 'react';
import s from './Footer.module.scss';
import {FooterProps} from "./Footer.props";
import cn from "classnames";
import format from 'date-fns/format';

const Footer = ({className, ...rest}: FooterProps): JSX.Element => {
    return (
        <footer className={cn(className, s.footer)} {...rest}>
            <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
            <a href="#" target="_blank">Пользовательское соглашение</a>
            <a href="#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
};

export default Footer;
