// import { Box, Button } from "@mui/material";
import "./pageHeader.css";

const PageHeader = () => {
  const header = "pageHeader works! string interpolation";

  const headLineStyle = {
    color: "red",
    fontFamily: "Roboto, sans-serif",
  };
  return (
    <>
      <h2>{header}</h2>
      <h2 style={headLineStyle}>inline style</h2>
      <h2 className="blue">style form module</h2>
      <h2 style={{ marginBottom: "50px", fontSize: "5vw", color: "red" }}>
        {5 * 5}
      </h2>

      {/* <Box m={2} display="flex" justifyContent="space-evenly">
        <Button variant="text">text</Button>
        <Button variant="contained">text</Button>
        <Button variant="outlined">text</Button>
        <Button variant="outlined">text</Button>
        <Button variant="outlined">text</Button>
      </Box> */}
    </>
  );
};
export default PageHeader;
