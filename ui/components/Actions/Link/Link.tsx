import { ReactNode } from "react";

const Link = ({
  onClick,
  children = "Link",
}: {
  onClick?: () => void;
  children?: ReactNode;
}) => (
  <a href="" data-testid="Link" className="bg-bg-3" onClick={onClick}>
    {children}
  </a>
);

export default Link;
