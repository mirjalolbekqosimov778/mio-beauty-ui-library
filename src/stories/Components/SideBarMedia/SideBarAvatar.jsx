import React from "react";
import "./SideBarAvatar.scss";
import AvatarImg from '../../assets/avatar.png'


export const SideBarAvatar = ({

}) => {
    return (
        <img src={AvatarImg} className="storybook-sidebar--avatar-img" />
    );
};
