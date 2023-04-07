import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { ActionSizes, ActionVariants } from "../actions.types";

const meta: Meta<typeof Button> = {
  title: "Button",
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
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: (
      <>
        <div>icon</div>
        <div>asdf</div>
      </>
    ),
  },
};
