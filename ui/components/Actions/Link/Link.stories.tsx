import { Meta, StoryObj } from "@storybook/react";
import { Link } from ".";
import { ActionVariants, ActionSizes } from "../actions.types";

export default {
  component: Link,
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
} as Meta<typeof Link>;

type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  render: (args) => (
    <div className="flex">
      <Link {...args} />
    </div>
  ),
  args: {
    href: "/",
    children: "Link",
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex items-start gap-3">
      <Link size="lg" {...args} />
      <Link size="md" {...args} />
      <Link size="sm" {...args} />
    </div>
  ),
  args: {
    href: "/",
    children: "Link",
  },
};

export const Variants: Story = {
  render: (args) => (
    <div className="flex items-start gap-3">
      <Link variant="primary" {...args} />
      <Link {...args} />
    </div>
  ),
  args: {
    href: "/",
    children: "Link",
  },
};
