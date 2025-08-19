import React from "react";
import { ImIcons } from "../../assets/icons"; // qo‘lda yozilgan index.js
import PropTypes from "prop-types";

export const Icon = ({ name, size = 24, fill = "currentColor", ...props }) => {
    const Component = ImIcons[name];
    if (!Component) return null;

    return <Component width={size} height={size} fill={fill} {...props} />;
};