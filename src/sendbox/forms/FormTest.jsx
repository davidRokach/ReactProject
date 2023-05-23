import useForm from "../../forms/hooks/useForm";
import Joi from "joi";
import { Container } from "@mui/system";
import Form from "../../forms/components/Form";
import Input from "../../forms/components/Input";
import { memo } from "react";

const FormTest = () => {
  const handleSubmit = (data) => console.log(data);
  const sechema = {
    first: Joi.string().min(2).required(),
    last: Joi.string().min(2).required(),
  };
  const INITIAL_FORM = { first: "", last: "" };

  const { value, ...rest } = useForm(INITIAL_FORM, sechema, handleSubmit);
  return (
    <Container
      sx={{
        marginTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Form
        title="enter name"
        onSubmit={rest.onSubmit}
        onReset={rest.handleChange}
        onChange={rest.validateForm}
        styles={{ maxWidth: "450px" }}
      >
        <Input
          label="first"
          name="first"
          type="first"
          error={value.errors.first}
          onChange={rest.handleChange}
          data={value.formData}
        />
        <Input
          label="last"
          name="last"
          type="last"
          error={value.errors.last}
          onChange={rest.handleChange}
          data={value.formData}
        />
      </Form>
    </Container>
  );
};

export default memo(FormTest);
