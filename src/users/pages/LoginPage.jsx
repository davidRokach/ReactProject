import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";

const LoginPage = () => {
  const user = null;
  if (user) return <Navigate replace to={ROUTES.CARDS} />;
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="Login Page"
        subtitle="Here you can Login to the site"
      ></PageHeader>
    </Container>
  );
};
export default LoginPage;
