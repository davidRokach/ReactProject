import MuiCard from "@mui/material/Card";
import CardHead from "./CardHeadComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import Cards from "../Cards";
import cardType from "../../models/types/cardType";

let { card, handleCardDelete, handleCardLIke } = Cards();
const Card = () => {
  // const card = {
  //   _id: "14518948226",
  //   name: "Jony Rokach",
  //   profession: "Website builder",
  //   phone: "054459874",
  //   email: "Jonyrokach@gmail.com",
  //   cardNumber: "01515156",
  //   image: {
  //     url: "https://img.freepik.com/free-photo/businessman-leader-modern-office-with-businesspeople-working_1139-961.jpg?w=740&t=st=1678986515~exp=1678987115~hmac=c296c97a9d9ab9ffc64572f6d49251ff0db58cde6b45a4a07aad1f0d972b87e5",
  //     alt: "businessman leader in modern office",
  //     _id: "14518948226",
  //   },
  //   address: {
  //     state: "isreal",
  //     country: "isreal",
  //     city: "Tel aviv",
  //     street: "Street",
  //     houseNumber: 1,
  //     _id: "14518948226",
  //   },
  //   createAt: new Date(),
  // };
  if (!card.length) {
    <Typography>Ooops it seams that there are no cards to show</Typography>;
  }

  return (
    <>
      <Grid container spacing={2}>
        {card.map((item) => {
          return (
            <Grid item xs={12} md={4} key={item._id}>
              <Box>
                <MuiCard
                  sx={{
                    width: 280,
                    margin: "auto",
                    marginTop: 2,
                    padding: 1,
                  }}
                  raised
                >
                  <CardActionArea>
                    <CardHead image={item.image} />
                  </CardActionArea>
                  <CardBody
                    name={item.name}
                    profession={item.profession}
                    phone={item.phone}
                    email={item.email}
                    cardNumber={item.cardNumber}
                    address={item.address}
                  />
                  <CardActionBar
                    cardId={item._id}
                    handleCardDelete={handleCardDelete}
                    handleCardLIke={handleCardLIke}
                  />
                </MuiCard>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

CardActionBar.prototype = {
  image: cardType.image,
};
CardBody.prototype = {
  name: cardType.name,
  profession: cardType.profession,
  phone: cardType.phone,
  email: cardType.email,
  cardNumber: cardType.cardNumber,
  address: cardType.address,
};
CardHead.prototype = {
  cardId: cardType._id,
};
export default Card;
