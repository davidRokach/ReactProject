import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";

const CardDetailPage = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Business Details"
        subtitle="Here you acn find more details about the business"
      ></PageHeader>
      <div>Details of card:{id}</div>
    </Container>
  );
};
export default CardDetailPage;
