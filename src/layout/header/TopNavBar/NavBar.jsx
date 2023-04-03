import { AppBar, Toolbar } from "@mui/material";
import { LeftNavigation } from "./LeftNavigation";
export const NavBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <LeftNavigation />
      </Toolbar>
    </AppBar>
  );
};
