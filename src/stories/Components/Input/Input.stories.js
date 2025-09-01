import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export const Default = {
  args: {
    disabled: false,
    label: 'Title',
    notice: 'Notice text',
    errorFilled: false,
    errorText: 'Error text',
    type: 'text',
    placeholder: 'Title',
  },
};
Default.storyName = 'Input';