import React from "react";
import { Preview } from "@storybook/react";
import { ThemeProvider, Layout } from "../ui/components";
import "../app/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Layout>
          <Story />
        </Layout>
      </ThemeProvider>
    ),
  ],
};

export default preview;
