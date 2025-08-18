// /** @type { import('@storybook/react-vite').StorybookConfig } */
// const config = {
//   "stories": [
//     "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-docs",
//     "@storybook/addon-a11y",
//     "@storybook/addon-vitest"
//   ],
//   "framework": {
//     "name": "@storybook/react-vite",
//     "options": {}
//   }
// };
// export default config;

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/**/*.stories.@(js|jsx|ts|tsx|mjs)" // Story fayllaringiz joylashgan yo‘l
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest"
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },

  async viteFinal(config) {
    // SVGR pluginini qo‘shamiz
    const svgr = (await import('vite-plugin-svgr')).default;
    config.plugins = config.plugins || [];
    config.plugins.push(svgr());
    return config;
  }
};

export default config;
