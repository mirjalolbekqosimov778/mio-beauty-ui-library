import React from "react";
import PropTypes from "prop-types";
import "./SideBarMedia.scss";
import { Icon } from "../Icons";



export const SideBarMedia = ({
    state = "default"
}) => {
    return (
        <button className={["storybook--sidebar-button ", `storybook--sidebar-button--${state}`].join(" ")} disabled={state === 'disabled'} >
            <Icon name="ic_square_outlined" className="storybook--sidebar-button-icon" />
        </button >
    );
};

SideBarMedia.propTypes = {
    state: PropTypes.oneOf(["default", "focus", "disabled"])
};
