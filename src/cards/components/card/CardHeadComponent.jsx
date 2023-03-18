import { CardMedia } from "@mui/material";

const CardHead = ({ image }) => {
  const { url, alt } = image;
  return (
    <>
      <CardMedia component="img" height="170" image={url} alt={alt} />
    </>
  );
};
export default CardHead;
