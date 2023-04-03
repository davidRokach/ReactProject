import { AppBar, Container, Toolbar } from "@mui/material";
import NavItem from "../../routes/NavItem";
import { Outlet } from "react-router-dom";

const Hooks = () => {
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <NavItem label="Set Array" color="black" to="SetArray" />
          <NavItem label="Set Counter" color="black" to="SetCounter" />
          <NavItem label="Set Object" color="black" to="SetObject" />
          <NavItem label="Set Post" color="black" to="SetPost" />
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 3 }}>
        <Outlet />
      </Container>
    </>
  );
};
export default Hooks;
