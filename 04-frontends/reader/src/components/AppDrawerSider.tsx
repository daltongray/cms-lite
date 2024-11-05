import * as React from "react";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";
import { Explore, HelpOutline } from "@mui/icons-material";
import { clientStateManager } from "loaders";
import { useNavigate } from "react-router-dom";
import { ROUTE_KEYS } from "keys";

import { AutoDiv } from "@change-my-story/component-library";

export const AppDrawerSider = () => {
  const navigate = useNavigate();

  const setIsDrawerOpen = (isDrawerOpen: boolean) =>
    clientStateManager.update({ isDrawerOpen });
  const { isDrawerOpen } = useSelector(clientStateManager.getSelector);

  return (
    <React.Fragment>
      <Drawer
        variant={"temporary"}
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setIsDrawerOpen(false)}
          onKeyDown={() => setIsDrawerOpen(false)}
        >
          <List sx={{ paddingTop: 0 }}>
            <AutoDiv paddingBottom={25} paddingTop={0}>
              {/* TODO - add logo here */}
            </AutoDiv>

            <ListItem key={"Explore"} disablePadding>
              <ListItemButton onClick={() => navigate("/")}>
                <ListItemIcon>
                  <Explore />
                </ListItemIcon>
                <ListItemText primary={"Play"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"About"} disablePadding>
              <ListItemButton onClick={() => navigate(ROUTE_KEYS.ABOUT)}>
                <ListItemIcon>
                  <HelpOutline />
                </ListItemIcon>
                <ListItemText primary={"About"} />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </React.Fragment>
  );
};
