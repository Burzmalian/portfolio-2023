// Button.stories.tsx
import * as React from "react";
import { Meta } from "@storybook/react";
import { Button } from "./";

export default {
  component: Button,
} as Meta<typeof Button>;

export const Default = () => <Button />;
