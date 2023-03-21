import { ReactNode } from "react";
import Rif from "./Rif";

type Props<T> = {
  items: T[] | undefined;
  render: (item: T) => JSX.Element;
  emptyMessage?: ReactNode;
};

const Map = <T,>({ items, render, emptyMessage = "No records" }: Props<T>) => {
  return (
    <>
      {items && items.length > 0
        ? items.map((item) => render(item))
        : emptyMessage}
    </>
  );
};

export default Map;
