import { ReactNode } from "react";
import CardAction from "./CardAction";
import { Layout } from "../Layout";

const Card = () => {
  return (
    <div className="overflow-hidden rounded-xl border bg-g-theme-900 p-6">
      <div className="-m-6 mb-6 aspect-video bg-slate-100"></div>
      <div className="mb-4 flex items-center justify-between">
        <div className="text-sm">2023/05/10</div>
        <CardAction />
      </div>
      <h3 className="mb-4 text-xl font-bold">
        This is an example of a blog title
      </h3>
      <div className="line-clamp-3">
        This is a description for a blog entry, this can be longer and wrap a
        few lines
      </div>
    </div>
  );
};

const CardGrid = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-1 justify-around gap-4 sm:grid-cols-2 md:grid-cols-3">
      {children}
    </div>
  );
};

Card.Grid = CardGrid;

export default Card;
