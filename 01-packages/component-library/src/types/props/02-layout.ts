import { ComponentProps, FC, MutableRefObject, ReactNode } from "react";

type MyCSSProperties = {
  color?: string;
  gap?: number;
  backgroundColor?: string;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  overflowY?: "auto" | string;
  overflowX?: "auto" | string;
  display?: "none" | "flex" | "block" | "inline" | "inline-block" | "grid";
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  position?: "static" | "relative" | "fixed" | "absolute" | "sticky";
  width?: string | number;
  maxWidth?: string | number;
  minWidth?: string | number;
  height?: string | number;
  maxHeight?: string | number;
  minHeight?: string | number;
  margin?: string | number;
  marginTop?: string | number;
  marginRight?: string | number;
  marginBottom?: string | number;
  marginLeft?: string | number;
  padding?: string | number;
  paddingTop?: string | number;
  paddingRight?: string | number;
  paddingBottom?: string | number;
  paddingLeft?: string | number;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderRadius?: string | number;
  fontSize?: string | number;
  fontWeight?:
    | "normal"
    | "bold"
    | "bolder"
    | "lighter"
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900;
  lineHeight?: string | number;
  textAlign?: "left" | "right" | "center" | "justify" | "start" | "end";
  overflow?: "visible" | "hidden" | "clip" | "scroll" | "auto";
  opacity?: number;
  zIndex?: number;
  filter?: string;
  cursor?:
    | "auto"
    | "default"
    | "none"
    | "pointer"
    | "wait"
    | "text"
    | "move"
    | "not-allowed";
  pointerEvents?: "auto" | "none";
};

export type AutoDivProps = MyCSSProperties & {
  id?: string;
  children?: ReactNode;
  className?: string;
} & Partial<
    Pick<ComponentProps<"div">, "onClick" | "onDragStart" | "draggable">
  >;

export type FlexColumnProps = FlexRowProps;
export type FlexRowProps = FC<MyCSSProperties & { children?: ReactNode }>;
