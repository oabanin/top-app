import React from 'react';
import s from './Sidebar.module.scss';
import {SidebarProps} from "./Sidebar.props";
import cn from "classnames";

const Sidebar = ({...rest}: SidebarProps): JSX.Element => {
    return (
       <div {...rest}>
           SIDEBAR
       </div>
    );
};

export default Sidebar;
