import {
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import InfoIcone from "@mui/icons-material/Info";
import { Favorite, Portrait } from "@mui/icons-material";

const Footer = () => {
  const navigate = useNavigate();
  const navigateTo = (to) => navigate(to);
  return (
    <Paper
      sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <Button>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="About"
            icon={<InfoIcone />}
            onClick={() => navigateTo(ROUTES.ABOUT)}
          />

          <BottomNavigationAction
            label="Favorites"
            icon={<Favorite />}
            onClick={() => navigateTo(ROUTES.FAV_CARDS)}
          />

          <BottomNavigationAction
            label="My cards"
            icon={<Portrait />}
            onClick={() => navigateTo(ROUTES.MY_CARDS)}
          />
        </BottomNavigation>
      </Button>
    </Paper>
  );
};
export default Footer;
