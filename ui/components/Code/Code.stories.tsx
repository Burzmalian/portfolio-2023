import * as React from "react";
import { Meta } from "@storybook/react";
import { Code } from "./";

export default {
  component: Code,
  parameters: {
    layout: "centered",
  },
} as Meta<typeof Code>;

export const Default = () => <Code />;
