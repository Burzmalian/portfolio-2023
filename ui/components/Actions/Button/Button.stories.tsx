import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ActionSizes, ActionVariants } from "../actions.types";

export default {
  component: Button,
  argTypes: {
    variant: {
      options: Object.values(ActionVariants),
      control: { type: "radio" },
    },
    size: {
      options: Object.values(ActionSizes),
      control: { type: "radio" },
    },
  },
} as Meta<typeof Button>;

export const Default = () => (
  <div className="flex">
    <Button onClick={() => console.log("button!")}>Button</Button>
  </div>
);

export const Variants = () => (
  <div className="flex gap-3">
    <Button onClick={() => console.log("button!")}>Button</Button>
    <Button variant="primary" onClick={() => console.log("button!")}>
      Button
    </Button>
  </div>
);

export const Sizes = () => (
  <div className="flex items-start gap-3">
    <Button onClick={() => console.log("button!")}>Button</Button>
    <Button size="md" onClick={() => console.log("button!")}>
      Button
    </Button>
    <Button size="sm" onClick={() => console.log("button!")}>
      Button
    </Button>
  </div>
);
