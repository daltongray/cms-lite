import { ReactNode } from "react";
import { AutoDiv } from "@change-my-story/component-library";
import { useSelector } from "react-redux";
import { gameDataManager } from "loaders";
import { CircularProgress } from "@mui/material";

export const EffectsLayout = ({ children }: { children: ReactNode }) => {
  const { hasFetchedGames } = useSelector(gameDataManager.getSelector);

  const renderPage = hasFetchedGames;

  if (!renderPage)
    return (
      <AutoDiv>
        <CircularProgress />
      </AutoDiv>
    );

  return <AutoDiv>{renderPage && children}</AutoDiv>;
};
