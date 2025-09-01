import React from "react";
import './SideBarHeaderIcon.scss'
import { Icon } from "../Icons";



export const SideBarHeaderIcon = ({

}) => {
    return (
        <button className={["storybook--sidebar-header-button "].join(" ")} >
            <Icon name="ic_didebar_close" className='storybook--sidebar-header-icon' />
        </button >
    );
};

