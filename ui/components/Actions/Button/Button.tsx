import { ActionSizes, ActionVariants, ButtonTypes } from "../actions.types";
import cx from "classnames";

const Button = ({
  children,
  "data-testid": dataTestid,
  variant = ActionVariants.secondary,
  size = ActionSizes.lg,
  type = "button",
  ...rest
}: ButtonTypes) => {
  const variantClasses = {
    primary: "bg-bg-3",
    secondary: "bg-bg-2 border border-[red]",
  };

  const sizeClasses = {
    sm: "px-6 py-2 text-sm",
    md: "px-8 py-3 text-md",
    lg: "px-10 py-4 text-lg",
  };

  return (
    <button
      type={type}
      data-testid={dataTestid}
      className={cx(
        "flex items-center gap-2 rounded-full",
        variantClasses[variant],
        sizeClasses[size]
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
