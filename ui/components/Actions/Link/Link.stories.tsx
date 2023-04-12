// Link.stories.tsx
import * as React from "react";
import { Meta } from "@storybook/react";
import { Link } from ".";

export default {
  component: Link,
} as Meta<typeof Link>;

export const Default = () => <Link href="/">Link</Link>;
