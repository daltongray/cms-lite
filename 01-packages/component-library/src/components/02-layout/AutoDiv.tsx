import {
  CSSProperties,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
} from "react";
import { AutoDivProps } from "types";

export const AutoDiv: ForwardRefExoticComponent<
  PropsWithoutRef<AutoDivProps> & RefAttributes<HTMLDivElement | undefined>
> = forwardRef<HTMLDivElement | undefined, AutoDivProps>(
  ({ id, children, onClick, className, ...styles }, ref) => {
    const style = {
      ...styles,
    };

    return (
      <div
        id={id}
        className={className}
        onClick={onClick}
        style={style as CSSProperties}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
