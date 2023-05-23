import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import { makeFirstLetterCapital } from "../utils/algoMethods";
import { bool, func, object, string } from "prop-types";
import { memo } from "react";
const Input = ({
  variant,
  type,
  name,
  data,
  label,
  required,
  error,
  handleChange,
  ...rest
}) => {
  return (
    <Grid item xs={12} {...rest}>
      <TextField
        variant={variant}
        label={makeFirstLetterCapital(label)}
        type={type}
        value={data[name] || ""}
        required={required}
        error={Boolean(error)}
        onChange={handleChange}
        fullWidth
        autoComplete="off"
      ></TextField>
    </Grid>
  );
};

Input.prototype = {
  variant: string,
  type: string.isRequired,
  name: string.isRequired,
  data: object.isRequired,
  label: string,
  required: bool.isRequired,
  error: string,
  handleChange: func.isRequired,
};

Input.defaultProps = {
  variant: "outlined",
  type: "text",
  required: true,
};

export default memo(Input);
