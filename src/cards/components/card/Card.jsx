import MuiCard from "@mui/material/Card";
import CardHead from "./CardHeadComponent";
import CardBody from "./CardBody";
import CardActionBar from "./CardActionBar";
import { CardActionArea } from "@mui/material";
import Cards from "../../Cards";
// import { card } from "../../Cards";

const Card = () => {
  let { card } = Cards();
  // const card = {
  //   _id: "14518948226",
  //   name: "Jony Rokach",
  //   profession: "Website builder",
  //   phone: "054459874",
  //   email: "Jonyrokach@gmail.com",
  //   cardNumber: "01515156",
  //   image: {
  //     url: "https://img.freepik.com/free-photo/businessman-leader-modern-office-with-businesspeople-working_1139-961.jpg?w=740&t=st=1678986515~exp=1678987115~hmac=c296c97a9d9ab9ffc64572f6d49251ff0db58cde6b45a4a07aad1f0d972b87e5",
  //     alt: "businessman leader in modern office",
  //     _id: "14518948226",
  //   },
  //   address: {
  //     state: "isreal",
  //     country: "isreal",
  //     city: "Tel aviv",
  //     street: "Street",
  //     houseNumber: 1,
  //     _id: "14518948226",
  //   },
  //   createAt: new Date(),
  // };
  return (
    <>
      {card.map((item, index, array) => {
        return (
          <MuiCard
            key={index}
            sx={{ width: 280, margin: "auto", marginTop: 2, padding: 1 }}
            raised
          >
            <CardActionArea>
              <CardHead image={item.image} />
            </CardActionArea>
            <CardBody
              name={item.name}
              profession={item.profession}
              phone={item.phone}
              email={item.email}
              cardNumber={item.cardNumber}
              address={item.address}
            />
            <CardActionBar />
          </MuiCard>
        );
      })}
    </>
  );
};

export default Card;
