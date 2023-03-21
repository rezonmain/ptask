import { ReactNode } from "react";

const Rif = ({
  _if,
  render,
  otherwise,
}: {
  _if?: unknown;
  render?: ReactNode;
  otherwise?: ReactNode;
}) => <>{!!_if ? render : otherwise}</>;
export default Rif;
