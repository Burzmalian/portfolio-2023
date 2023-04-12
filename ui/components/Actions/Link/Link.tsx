import cx from "classnames";

import { baseClasses, variantClasses, sizeClasses } from "../actions.consts";
import { ActionSizes, ActionVariants, LinkTypes } from "../actions.types";
import { forwardRef } from "react";

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
      <a
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
      </a>
    );
  }
);

Link.displayName = "Link";
export default Link;

// add Next Link
