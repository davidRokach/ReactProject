import MuiCard from "@mui/material/Card";
import CardHead from "./CardHeadComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { CardActionArea } from "@mui/material";
import { func } from "prop-types";
import cardType from "../../models/types/cardType";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";

const Card = ({ card, handleDeleteCard, handleLikeCard }) => {
  const navigate = useNavigate();
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
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >
        <CardHead image={card.image} />
        <CardBody
          name={card.name}
          profession={card.profession}
          phone={card.phone}
          email={card.email}
          cardNumber={card.cardNumber}
          address={card.address}
        />
      </CardActionArea>

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
