import React from "react";
import { ImIcons } from "../../assets/icons"; // qo‘lda yozilgan index.js
import PropTypes from "prop-types";

export const Icon = ({
    name,
    ...props
}) => {
    const Component = ImIcons[name];
    if (!Component) {
        console.warn(`Icon "${name}" not found`);
        return null;
    }
    return (
        <Component
            // className={className}
            width={24}
            height={24}
            {...props}
        />
    );
};

