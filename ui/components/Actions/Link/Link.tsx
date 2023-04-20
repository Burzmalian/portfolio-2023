import cx from "classnames";
import { forwardRef } from "react";
import NextLink from "next/link";

import {
  baseClasses,
  variantClasses,
  sizeClasses,
  iconClasses,
  paddingClasses,
} from "../actions.consts";
import { ActionSizes, ActionVariants, LinkTypes } from "../actions.types";

const Link = forwardRef<HTMLAnchorElement, LinkTypes>(
  (
    {
      href,
      className,
      children,
      "data-testid": dataTestId,
      iconOnly,
      variant = ActionVariants.primary,
      size = ActionSizes.md,
      ...rest
    },
    ref
  ) => {
    const isAbsolute = href.indexOf("://") > 0 || href.indexOf("//") === 0;

    const sharedProps = {
      ref,
      href,
      "data-testid": dataTestId,
      className: cx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        iconOnly ? iconClasses[size] : paddingClasses[size],
        className
      ),
      ...{ ...rest },
    };

    if (!isAbsolute) return <NextLink {...sharedProps}>{children}</NextLink>;

    return <a {...sharedProps}>{children}</a>;
  }
);

Link.displayName = "Link";
export default Link;

// Need to fix types for rel, target, etc
