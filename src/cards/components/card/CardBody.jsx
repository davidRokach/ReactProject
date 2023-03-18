import { CardContent, CardHeader, Divider, Typography } from "@mui/material";

const CardBody = ({ name, profession, phone, email, cardNumber, address }) => {
  const { city, street, houseNumber } = address;
  return (
    <>
      <CardHeader title={name} subheader={profession} />
      <Divider sx={{ marginX: 1 }} />
      <CardContent>
        <Typography textAlign="left" color="text.secondary">
          <Typography variant="subtitle2" component="strond">
            Phone:{" "}
          </Typography>
          {phone}
        </Typography>

        <Typography textAlign="left" color="text.secondary">
          <Typography variant="subtitle2" component="strong">
            Adress:{" "}
          </Typography>
          {city} {street} {houseNumber}{" "}
        </Typography>

        <Typography textAlign="left" color="text.secondary">
          <Typography variant="subtitle2" component="strong">
            Email:{" "}
          </Typography>
          {email}
        </Typography>

        <Typography textAlign="left" color="text.secondary">
          <Typography variant="subtitle2" component="strong">
            card Number:{" "}
          </Typography>
          {cardNumber}
        </Typography>
      </CardContent>
    </>
  );
};
export default CardBody;
