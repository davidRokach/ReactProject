import { Box, IconButton } from "@mui/material";
import { Delete, Edit, LinkedIn, Twitter } from "@mui/icons-material";
// import cardType from "../../models/types/cardType";

const CardActionBar = ({ handleCardDelete, handleCardLIke, cardId }) => {
  return (
    <>
      <Box display="flex">
        <Box>
          <IconButton onClick={() => handleCardLIke(cardId)}>
            <Edit />
          </IconButton>
          <IconButton onClick={() => handleCardDelete(cardId)}>
            <Delete />
          </IconButton>
        </Box>

        <Box sx={{ marginLeft: "39%" }}>
          <IconButton>
            <Twitter />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
        </Box>
      </Box>
    </>
  );
};
// CardActionBar.prototype = {
//   image: cardType.image,
// };
export default CardActionBar;
