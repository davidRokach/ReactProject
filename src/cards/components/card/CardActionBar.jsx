import { Box, IconButton } from "@mui/material";
import { Delete, Edit, LinkedIn, Twitter } from "@mui/icons-material";

const CardActionBar = () => {
  return (
    <>
      <Box display="flex">
        <Box>
          <IconButton>
            <Edit />
          </IconButton>
          <IconButton>
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
export default CardActionBar;
