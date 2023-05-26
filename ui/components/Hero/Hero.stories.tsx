import * as React from "react";
import { Meta } from "@storybook/react";
import Hero from "./Hero";

export default {
  component: Hero,
} as Meta<typeof Hero>;

export const Default = () => <Hero></Hero>;
