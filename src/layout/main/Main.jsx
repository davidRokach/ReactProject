import { Box } from "@mui/material";
import { node } from "prop-types";

const Main = ({ children }) => {
  return (
    <Box sx={{ minHeight: "85vh", backgroundColor: "#e3f2fd" }}>{children}</Box>
  );
};

Main.prototype = {
  children: node.isRequired,
};
export default Main;
