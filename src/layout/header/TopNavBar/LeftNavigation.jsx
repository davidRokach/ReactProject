import { Box } from "@mui/material";
import Logo from "./Logo/Logo";
import NavItem from "../../../routes/NavItem";
import ROUTES from "../../../routes/routesModel";
import LogoIcon from "./Logo/LogoIcon";

export const LeftNavigation = () => {
  return (
    <Box>
      <LogoIcon />
      <Logo />
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <NavItem label="About" to={ROUTES.ABOUT} />
        <NavItem label="My Cards" to={ROUTES.MY_CARDS} />
        <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS} />
        {/* <NavItem label="SINGUP" to={ROUTES.SINGUP} />
        <NavItem label="LOGIN" to={ROUTES.LOGIN} />
        <NavItem label="profile" to={ROUTES.USER_PROFILE} />
        <NavItem label="Edit account" to={ROUTES.EDIT_USER} /> */}
        <NavItem label="Sandbox" to={ROUTES.SANDBOX} />
      </Box>
    </Box>
  );
};
