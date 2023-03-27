import { shape, string } from "prop-types";
import addressType from "./addressType";
import imageType from "./imageType";

const cardType = shape({
  _id: string.isRequired,
  name: string.isRequired,
  profession: string.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  cardNumber: string.isRequired,
  image: imageType,
  address: addressType,
  createAt: string.isRequired,
});

export default cardType;
