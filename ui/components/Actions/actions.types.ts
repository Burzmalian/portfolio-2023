import { ReactNode } from "react";

export enum ActionVariants {
  primary = "primary",
  secondary = "secondary",
}

export enum ActionSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

export type ActionSharedTypes = {
  children: ReactNode;
  "data-testid"?: string;
  variant?: `${ActionVariants}`;
  size?: `${ActionSizes}`;
};

export type ButtonTypes = {
  type?: "button" | "submit" | "reset";
} & ActionSharedTypes &
  React.HTMLAttributes<HTMLButtonElement>;

export type LinkTypes = ActionSharedTypes & HTMLAnchorElement;
