import cx from "classnames";
import { forwardRef } from "react";
import NextLink from "next/link";

import { baseClasses, variantClasses, sizeClasses } from "../actions.consts";
import { ActionSizes, ActionVariants, LinkTypes } from "../actions.types";

const Link = forwardRef<HTMLAnchorElement, LinkTypes>(
  (
    {
      href,
      className,
      children,
      "data-testid": dataTestId,
      variant = ActionVariants.secondary,
      size = ActionSizes.lg,
      ...rest
    },
    ref
  ) => {
    return (
      <NextLink
        ref={ref}
        href={href}
        data-testid={dataTestId}
        className={cx(
          baseClasses,
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...rest}
      >
        {children}
      </NextLink>
    );
  }
);

Link.displayName = "Link";
export default Link;

// add Next Link
