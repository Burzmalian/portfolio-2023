"use client";

import cx from "classnames";

import {
  baseClasses,
  iconClasses,
  paddingClasses,
  sizeClasses,
  variantClasses,
} from "../actions.consts";
import { ActionSizes, ActionVariants, ButtonTypes } from "../actions.types";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ButtonTypes>(
  (
    {
      children,
      className,
      "data-testid": dataTestId,
      iconOnly,
      variant = ActionVariants.primary,
      size = ActionSizes.md,
      type = "button",
      onClick,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        data-testid={dataTestId}
        className={cx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          iconOnly ? iconClasses[size] : paddingClasses[size],
          className
        )}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
