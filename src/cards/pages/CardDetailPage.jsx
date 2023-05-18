import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import CardsFeedback from "../components/CardsFeedback";

const CardDetailPage = () => {
  const { id } = useParams();
  const { handleGetCard, card, isPending, error } = useCards();

  useEffect(() => {
    handleGetCard(id);
  }, []);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="card Details"
        subtitle="Here you acn find more details about the card"
      ></PageHeader>
      <CardsFeedback isPending={isPending} error={error} card={card} />
    </Container>
  );
};
export default CardDetailPage;
