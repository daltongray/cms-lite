import { ReactNode } from "react";
import { AutoDiv } from "@change-my-story/component-library";
import { useSelector } from "react-redux";
import { offlineAccessStateManager } from "loaders";
import { CircularProgress } from "@mui/material";

export const EffectsLayout = ({ children }: { children: ReactNode }) => {
  const { isInstalled } = useSelector(offlineAccessStateManager.getSelector);

  const renderPage = isInstalled;

  if (!renderPage)
    return (
      <AutoDiv>
        <CircularProgress />
      </AutoDiv>
    );

  return <AutoDiv>{renderPage && children}</AutoDiv>;
};
