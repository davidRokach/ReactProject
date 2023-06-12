import { Box, CardActions, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CallIcon from "@mui/icons-material/Call";
import { useUser } from "../../../users/providers/UserProvider";
import { useState } from "react";
import { func, string } from "prop-types";
import CardDeleteDialog from "./CardDeleteDialog";
import ROUTES from "../../../routes/routesModel";
import { useNavigate } from "react-router-dom";

const CardActionBar = ({ onDelete, handleCardLike, cardId, cardUserId }) => {
  const [isDialogopen, setDialog] = useState(false);
  const { user } = useUser();
  const navigate = useNavigate();

  const handleDialog = (term) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };
  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ paddingTop: 0, justifyContent: "space-between" }}
      >
        <Box>
          {(user?._id === cardUserId || user?.isAdmin) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
            >
              <DeleteIcon />
            </IconButton>
          )}

          {user?._id === cardUserId && (
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`../${ROUTES.EDIT_CARD}/${cardId}`)}
            >
              <ModeEditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          <IconButton>
            <CallIcon />
          </IconButton>

          {user && (
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleCardLike(cardId)}
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogopen={isDialogopen}
        onDelete={handleDeleteCard}
        onChangeDialog={handleDialog}
      />
    </>
  );
};

CardActionBar.propTypes = {
  cardId: string.isRequired,
  onDelete: func.isRequired,
  handleCardLike: func.isRequired,
  cardUserId: string.isRequired,
};
export default CardActionBar;
