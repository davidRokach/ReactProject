import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";

const SingUpPage = () => {
  //   const user = null;
  const user = true;

  if (user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Singup Page"
        subtitle="Here you can singup to the site"
      ></PageHeader>
    </Container>
  );
};
export default SingUpPage;
