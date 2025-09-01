import React from "react";
import { SideBarMedia } from "./SidebarMedia.jsx";
import { SideBarAvatar } from "./SideBarAvatar.jsx";
import { SideBarHeaderIcon } from "./SideBarHeaderIcon.jsx";

export default {
    title: "Example/Sidebar",
    parameters: {
        layout: "centered",
    },
};

const MediaTemplate = (args) => <SideBarMedia {...args} />;
export const Media = MediaTemplate.bind({});
Media.args = {
    state: "default",
};
Media.argTypes = {
    state: {
        options: ["default", "focus", "disabled"],
        control: { type: "radio" },
    },
};

const AvatarTemplate = (args) => <SideBarAvatar {...args} />;
export const Avatar = AvatarTemplate.bind({});
Avatar.args = {};

const HeaderIconTemplate = (args) => <SideBarHeaderIcon {...args} />;
export const HeaderIcon = HeaderIconTemplate.bind({});
HeaderIcon.args = {};
