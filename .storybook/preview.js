/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    actions: { disable: true },
    viewport: {
      disable: true,
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: { disable: true },
  },
};

export default preview;