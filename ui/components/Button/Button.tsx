import { ReactNode } from "react";

const Button = ({
  onClick,
  children = "Button",
}: {
  onClick?: () => void;
  children?: ReactNode;
}) => (
  <button data-testid="button" className="bg-bg-3" onClick={onClick}>
    {children}
  </button>
);

export default Button;
