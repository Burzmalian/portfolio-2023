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
    const isAbsolute = href.indexOf("://") > 0 || href.indexOf("//") === 0;

    const sharedProps = {
      ref,
      href,
      "data-testid": dataTestId,
      className: cx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
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
