import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";

const CardDetailPage = () => {
  const { id } = useParams();
  const { handleGetCard, handleDeleteCard, value } = useCards();
  const { card, isPending, error } = value;
  useEffect(() => {
    handleGetCard(id);
  }, []);

  const onDeleteCard = async (cardId) => {
    await handleDeleteCard(cardId); // this will delete the card from the DB
    await handleGetCard();
  };

  const handleCardLIke = (_id) => {
    console.log(`you like card namber:${_id}`);
  };
  console.log(card);
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="card Details"
        subtitle="Here you can find more details about the card"
      ></PageHeader>
      <CardsFeedback
        isPending={isPending}
        error={error}
        card={card}
        onDeleten={onDeleteCard}
        onLike={handleCardLIke}
      />
    </Container>
  );
};
export default CardDetailPage;
