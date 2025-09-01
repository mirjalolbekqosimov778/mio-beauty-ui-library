import React from "react";
import { ImIcons } from "../../assets/icons";

export const Icon = ({ name, size = 24, fill = "none", ...props }) => {
    const Component = ImIcons[name];
    if (!Component) return null;

    return <Component width={size} height={size} fill={fill} {...props} />;
};