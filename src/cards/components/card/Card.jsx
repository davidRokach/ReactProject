import MuiCard from "@mui/material/Card";
import CardHead from "./CardHeadComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { CardActionArea } from "@mui/material";
import { func } from "prop-types";
import cardType from "../../models/types/cardType";

const Card = ({ card, handleDeleteCard, handleLikeCard }) => {
  return (
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
        <CardHead image={card.image} />
      </CardActionArea>
      <CardBody
        name={card.name}
        profession={card.profession}
        phone={card.phone}
        email={card.email}
        cardNumber={card.cardNumber}
        address={card.address}
      />
      <CardActionBar
        cardId={card._id}
        handleCardDelete={handleDeleteCard}
        handleCardLIke={handleLikeCard}
      />
    </MuiCard>
  );
};
Card.propTypes = {
  card: cardType.isRequired,
  handleDeleteCard: func.isRequired,
  handleLikeCard: func.isRequired,
};

export default Card;
