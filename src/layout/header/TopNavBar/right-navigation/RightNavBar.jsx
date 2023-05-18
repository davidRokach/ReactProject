import { Box, IconButton } from "@mui/material";
import { useTheme } from "../../../../provider/ThemeProvider";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SearchBar from "./SearchBar";
import NotLogged from "./NotLogged";
import Logged from "./Logged";
import MoreButton from "./MoreButton";
import MenuBar from "./MenuBar";

const RightNavBar = () => {
  const user = false;
  let anchorEl = null;

  const setAnchorEl = (target) => {
    anchorEl = target;
    console.log("you opened menu");
  };

  const closeMenu = () => {
    anchorEl = null;
    console.log("you closed menu");
  };

  const { isDark, toggleDarkMode } = useTheme();
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <SearchBar />

        <IconButton aria-label="theme button" onClick={() => toggleDarkMode()}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {!user && <NotLogged />}

        {user && <Logged setAnchorEl={setAnchorEl} />}
      </Box>

      <MoreButton onClick={setAnchorEl} />

      <MenuBar
        isMenuOpen={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onCloseMenu={closeMenu}
      />
    </>
  );
};
export default RightNavBar;
