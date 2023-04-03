import { AppBar, Toolbar } from "@mui/material";
import NavItem from "../routes/NavItem";
import { Outlet } from "react-router-dom";

const SandBox = () => {
  return (
    <>
      <AppBar position="static" color="transparent" sx={{ mb: "5px" }}>
        <Toolbar>
          <NavItem label="props" color="black" to="props" />
          <NavItem label="hooks" color="black" to="hooks" />
          <NavItem label="events" color="black" to="events" />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};
export default SandBox;