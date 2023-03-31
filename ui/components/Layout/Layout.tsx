import React from "react";
import { ReactNode } from "react";
import cx from "classnames";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="dark flex h-full w-full flex-col">{children}</div>
);

const LayoutContainer = ({ children }: { children: ReactNode }) => (
  <div className="container mx-auto flex w-full flex-col md:h-full md:flex-row">
    {children}
  </div>
);

export enum LayoutParts {
  Header = "Header",
  Footer = "Footer",
  Sidebar = "Sidebar",
  Main = "Main",
  Middle = "Middle",
}

type LayoutPartProps = {
  as?: keyof JSX.IntrinsicElements;
  children: ReactNode;
  type: `${LayoutParts}`;
  className?: string;
};

const LayoutPart = ({ as, children, type, className }: LayoutPartProps) => {
  const { Header, Main, Footer, Sidebar, Middle } = LayoutParts;

  const typeMap = {
    [Header]: {
      element: "header",
      classes: "",
    },
    [Main]: {
      element: "main",
      classes: "grow",
    },
    [Footer]: {
      element: "footer",
      classes: "",
    },
    [Sidebar]: {
      element: "sidebar",
      classes: "md:w-1/4",
    },
    [Middle]: {
      element: "div",
      classes: "flex w-full flex-col gap-1 md:h-full md:flex-row",
    },
  };

  const { element, classes } = typeMap[type];
  const Element = as || (element as keyof JSX.IntrinsicElements);

  return <Element className={cx(classes, className)}>{children}</Element>;
};

Layout.Part = LayoutPart;
Layout.Container = LayoutContainer;
export default Layout;
