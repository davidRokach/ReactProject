import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";
import { useEffect } from "react";

const MyCards = () => {
  const { handleGetmyCards, value } = useCards();
  const { isPending, error, cards } = value;
  useEffect(() => {
    handleGetmyCards();
  }, []);

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="My cards"
        subtitle="Here you acn my cards"
      ></PageHeader>
      <CardsFeedback isPending={isPending} error={error} cards={cards} />
    </Container>
  );
};

export default MyCards;
