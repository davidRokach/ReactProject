import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useEffect } from "react";

const MyCards = () => {
  const { handleGetmyCards, handleDeleteCard, value } = useCards();
  const { isPending, error, cards } = value;
  useEffect(() => {
    handleGetmyCards();
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId); // this will delete the card from the DB
    await handleGetmyCards();
  };

  const handleCardLIke = (_id) => {
    console.log(`you like card namber:${_id}`);
  };
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="My cards"
        subtitle="Here you acn my cards"
      ></PageHeader>
      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={handleCardLIke}
      />
    </Container>
  );
};

export default MyCards;
