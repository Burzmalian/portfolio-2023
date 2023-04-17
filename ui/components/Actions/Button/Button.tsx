"use client";

import cx from "classnames";

import { baseClasses, sizeClasses, variantClasses } from "../actions.consts";
import { ActionSizes, ActionVariants, ButtonTypes } from "../actions.types";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, ButtonTypes>(
  (
    {
      children,
      className,
      "data-testid": dataTestId,
      variant = ActionVariants.secondary,
      size = ActionSizes.lg,
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

// fill out stories
