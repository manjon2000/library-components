import type { StorybookConfig } from "@storybook/angular";
import * as path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/addon-mdx-gfm"
  ],

  framework: {
    name: "@storybook/angular",
    options: {},
  },

  docs: {}
};
export default config;
