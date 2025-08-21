import { OtpInput } from "./OtpInput";

export default {
    title: "Example/OtpInput",
    component: OtpInput,
    argTypes: {
        length: {
            control: { type: "select" },
            options: Array.from({ length: 10 }, (_, i) => i + 1),
        },
    },
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const Playground = {
    args: {
        length: 6,
    },
    render: (args) => <OtpInput {...args} />,
};
