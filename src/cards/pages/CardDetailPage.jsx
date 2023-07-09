import { Box, Container, Typography } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import { useEffect } from "react";
import Spinner from "../../components/Spinner";
import Erorr from "../../components/Error";
import Map from "../../components/Map";

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
  if (isPending) return <Spinner />;
  if (error) return <Erorr errorMessage={error} />;
  if (!card)
    return (
      <p>
        Oopsi... there are no card in the dadabase that match the parameters you
        enter
      </p>
    );

  return (
    <>
      <Container maxWidth="lg" sx={{ marginBottom: "3vh" }}>
        <PageHeader
          title="card Details"
          subtitle="Here you can find more details about the business card"
        ></PageHeader>
        <Typography variant="h3">{card.title || "no title"}</Typography>
        <Box
          component="img"
          sx={{
            border: "3px solid black",
            borderRadius: "30px",
            width: 500,
            maxWidth: { xs: 500, md: 375 },
          }}
          alt={card.image.alt || "no alt"}
          src={card.image.url}
        />
        <Typography variant="h6">{card.subtitle || "no subtitle"}</Typography>
        <Typography variant="body1">
          {card.description || "no description"}
        </Typography>
      </Container>
      <Map address={card.address} />
    </>
  );
};
export default CardDetailPage;
