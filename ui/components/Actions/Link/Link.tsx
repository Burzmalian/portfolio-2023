import cx from "classnames";
import { forwardRef, useCallback } from "react";
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

    const Anchor = useCallback(() => {
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
    }, [children, className, dataTestId, href, ref, rest, size, variant]);

    if (!isAbsolute)
      return (
        <NextLink href={href} passHref legacyBehavior>
          <Anchor />
        </NextLink>
      );

    return <Anchor />;
  }
);

Link.displayName = "Link";
export default Link;
