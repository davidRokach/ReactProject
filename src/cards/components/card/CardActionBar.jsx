import { Box, IconButton } from "@mui/material";
import { Delete, Edit, HeartBroken, Twitter } from "@mui/icons-material";
import { useUser } from "../../../users/providers/UserProvider";
// import cardType from "../../models/types/cardType";

const CardActionBar = ({
  handleCardDelete,
  handleCardLIke,
  cardId,
  cardUserId,
}) => {
  const { user } = useUser();

  return (
    <>
      <Box display="flex">
        <Box>
          {user?._id === cardUserId && (
            <IconButton onClick={() => handleCardLIke(cardId)}>
              <Edit />
            </IconButton>
          )}

          {(user?._id === cardUserId || user?.isAdmin) && (
            <IconButton onClick={() => handleCardDelete(cardId)}>
              <Delete />
            </IconButton>
          )}
        </Box>

        <Box sx={{ marginLeft: "39%" }}>
          <IconButton>
            <Twitter />
          </IconButton>

          {user && (
            <IconButton>
              <HeartBroken />
            </IconButton>
          )}
        </Box>
      </Box>
    </>
  );
};
// CardActionBar.prototype = {
//   image: cardType.image,
// };
export default CardActionBar;
