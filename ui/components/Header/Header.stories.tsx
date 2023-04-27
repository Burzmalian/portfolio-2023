import * as React from "react";
import { Meta } from "@storybook/react";
import { Header } from "./";

export default {
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof Header>;

export const Default = () => <Header />;
