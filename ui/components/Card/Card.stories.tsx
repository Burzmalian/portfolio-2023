import * as React from "react";
import { Meta } from "@storybook/react";
import Card from "./Card";

export default {
  component: Card,
} as Meta<typeof Card>;

export const Default = () => (
  <Card.Grid>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
  </Card.Grid>
);
