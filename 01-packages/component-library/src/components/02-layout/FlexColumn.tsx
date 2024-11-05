import { FlexColumnProps } from "types";
import { CSSProperties } from "react";

export const FlexColumn: FlexColumnProps = ({ children, ...props }) => {
  const style = {
    display: "flex",
    flexDirection: "column" as const,
    height: "100%",
    ...props,
  };

  return <div style={style as CSSProperties}>{children}</div>;
};
