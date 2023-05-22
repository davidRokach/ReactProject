import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import NavBarLink from "../../../../routes/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

const MenuBar = ({ isMenuOpen, anchorEl, onCloseMenu }) => {
  // const user = true;
  const user = false;

  return (
    <MuiMenu
      open={isMenuOpen}
      onClose={onCloseMenu}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      {!user && (
        <Box>
          <NavBarLink to={ROUTES.LOGIN} color={"black"}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              Login
            </MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.ABOUT} color={"black"}>
            <MenuItem onClick={onCloseMenu}>About</MenuItem>

            {/* <Button color="inherit">
              <Typography>About</Typography>
            </Button> */}
          </NavBarLink>
          <NavBarLink to={ROUTES.SINGUP} color={"black"}>
            <MenuItem
              sx={{ display: { xs: "block", md: "none" } }}
              onClick={onCloseMenu}
            >
              SignUp
            </MenuItem>
          </NavBarLink>
        </Box>
      )}

      {user && (
        <Box>
          <NavBarLink to={ROUTES.error} color={"black"}>
            <MenuItem onClick={onCloseMenu}>Logout</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.USER_PROFILE} color={"black"}>
            <MenuItem onClick={onCloseMenu}>Profile</MenuItem>
          </NavBarLink>
          <NavBarLink to={ROUTES.EDIT_USER} color={"black"}>
            <MenuItem onClick={onCloseMenu}>Edit account</MenuItem>
          </NavBarLink>
        </Box>
      )}
    </MuiMenu>
  );
};

export default MenuBar;
