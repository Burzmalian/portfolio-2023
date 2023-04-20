import type { Meta, StoryObj } from "@storybook/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

import { Button } from "./Button";
import { ActionSizes, ActionVariants } from "./actions.types";

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

type Story = StoryObj<typeof Button>;

export const Default = () => (
  <div className="flex h-full items-center justify-center">
    <Button onClick={() => console.log("button!")}>Button</Button>
  </div>
);

export const Variants = () => (
  <div className="flex gap-3">
    <Button onClick={() => console.log("button!")}>Button</Button>
    <Button variant="secondary" onClick={() => console.log("button!")}>
      Button
    </Button>
  </div>
);

export const Icons = () => (
  <div className="flex gap-3">
    <Button
      iconOnly
      aria-label="Dark Mode"
      onClick={() => console.log("button!")}
    >
      <MoonIcon />
    </Button>
    <Button
      iconOnly
      aria-label="Light Mode"
      onClick={() => console.log("button!")}
    >
      <SunIcon />
    </Button>
    <Button
      iconOnly
      aria-label="Light Mode"
      variant="secondary"
      onClick={() => console.log("button!")}
      size="md"
    >
      <SunIcon />
    </Button>
    <Button
      iconOnly
      aria-label="Light Mode"
      onClick={() => console.log("button!")}
      size="sm"
    >
      <SunIcon />
    </Button>
    <Button
      aria-label="Light & Dark Mode"
      variant="secondary"
      onClick={() => console.log("button!")}
    >
      <MoonIcon />
      Light Mode
      <SunIcon />
    </Button>
  </div>
);

export const Sizes = () => (
  <div className="flex gap-3">
    <Button size="lg" onClick={() => console.log("button!")}>
      Button
    </Button>
    <Button onClick={() => console.log("button!")}>Button</Button>
    <Button size="sm" onClick={() => console.log("button!")}>
      Button
    </Button>
  </div>
);
