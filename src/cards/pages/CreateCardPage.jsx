import { Container } from "@mui/material";
import { Navigate } from "react-router-dom";

import ROUTES from "../../routes/routesModel";
import useForm from "../../forms/hooks/useForm";
import Input from "../../forms/components/Input";
import Form from "../../forms/components/Form";
import useCards from "../hooks/useCards";
import initialCreateCard from "../helpers/initialForms/initialCreateCard";
import cardsSchema from "../models/joi-schema/cardsSchema";
import { useUser } from "../../users/providers/UserProvider";

const CreateCardPage = () => {
  const { handleCreateCard } = useCards();
  const { value, ...rest } = useForm(
    initialCreateCard,
    cardsSchema,
    handleCreateCard
  );

  const { user } = useUser();

  if (!user?.isBusiness) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        onSubmit={rest.onSubmit}
        onChange={rest.validateForm}
        onReset={rest.handleReset}
        styles={{ maxWidth: "800px" }}
        title="register"
        to={ROUTES.MY_CARDS}
      >
        <Input
          name="title"
          label="title"
          error={value.errors.first}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="subtitle"
          label="subtitle"
          error={value.errors.middle}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
          required={true}
        />
        <Input
          name="description"
          label="description"
          error={value.errors.last}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="phone"
          label="phone"
          type="phone"
          error={value.errors.phone}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="email"
          label="email"
          type="email"
          error={value.errors.email}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="web"
          label="web"
          type="url"
          error={value.errors.password}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="url"
          label="image url"
          error={value.errors.url}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
          required={false}
        />
        <Input
          name="alt"
          label="image alt"
          error={value.errors.alt}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
          required={false}
        />
        <Input
          name="state"
          label="state"
          error={value.errors.state}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
          required={false}
        />
        <Input
          label="country"
          name="country"
          error={value.errors.country}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="city"
          label="city"
          error={value.errors.city}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="street"
          label="street"
          error={value.errors.street}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="houseNumber"
          label="house Number"
          type="number"
          error={value.errors.houseNumber}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
        />
        <Input
          name="zip"
          label="zip"
          error={value.errors.zip}
          handleChange={rest.handleChange}
          data={value.formData}
          sm={6}
          required={false}
        />
      </Form>
    </Container>
  );
};

export default CreateCardPage;
