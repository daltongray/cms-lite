import { AutoDivProps } from "types";
import { CSSProperties } from "react";

export const FlexRow = ({
  children,
  onClick,
  className,

  ...styles
}: AutoDivProps) => {
  const style = {
    display: "flex",
    flexDirection: "row" as const,
    width: "100%",
    ...styles,
  };

  return (
    <div className={className} onClick={onClick} style={style as CSSProperties}>
      {children}
    </div>
  );
};
