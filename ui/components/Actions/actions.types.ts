import { ReactNode, ButtonHTMLAttributes, HTMLAttributes } from "react";

export enum ActionVariants {
  primary = "primary",
  secondary = "secondary",
}

export enum ActionSizes {
  sm = "sm",
  md = "md",
  lg = "lg",
}

type icon =
  | {
      iconOnly: true;
      "aria-label": string;
    }
  | {
      iconOnly?: false;
    };

type ActionSharedTypes = {
  children: ReactNode;
  "data-testid"?: string;
  variant?: `${ActionVariants}`;
  size?: `${ActionSizes}`;
  iconOnly?: boolean;
} & icon;

export type ButtonTypes = {
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  onClick: () => void;
} & ActionSharedTypes &
  HTMLAttributes<HTMLButtonElement>;

export type LinkTypes = {
  href: string;
} & ActionSharedTypes &
  HTMLAttributes<HTMLAnchorElement>;
