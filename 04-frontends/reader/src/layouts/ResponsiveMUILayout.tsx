import { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ResizeHandler } from "components/ResizeHandler";

import { AutoDiv } from "@change-my-story/component-library";
import { useSelector } from "react-redux";
import { clientStateManager } from "loaders";
import { AppDrawerSider } from "components/AppDrawerSider";

export const ResponsiveMUILayout = ({
  children,
  applyMargin = true,
}: {
  children: ReactNode;
  applyMargin?: boolean;
}) => {
  const { isDrawerOpen } = useSelector(clientStateManager.getSelector);

  const darkTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#007dc3",
      },
      secondary: {
        main: "#ef3e42",
      },
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ResizeHandler />

      <AppDrawerSider />

      <AutoDiv marginLeft={applyMargin && isDrawerOpen ? 250 : 0}>
        {children}
      </AutoDiv>
    </ThemeProvider>
  );
};
