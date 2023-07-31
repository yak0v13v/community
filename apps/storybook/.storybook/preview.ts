import type { Preview } from "@storybook/react";
import "../../../packages/ui/styles/index.scss";
import "./style.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export const globalTypes = {
  dataThemes: {
    defaultValue: {
      list: [
        { name: "Light", dataTheme: "light", color: "#fff" },
        { name: "Dark", dataTheme: "dark", color: "#000" },
      ],
    },
  },
};

export default preview;
