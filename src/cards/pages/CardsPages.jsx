import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useEffect } from "react";

import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";

const CardsPage = () => {
  // const cards = [
  //   {
  //     _id: "14518948226",
  //     name: "Jony Rokach",
  //     profession: "Website builder",
  //     phone: "054459874",
  //     email: "Jonyrokach@gmail.com",
  //     cardNumber: "01515156",
  //     image: {
  //       url: "https://img.freepik.com/free-photo/businessman-leader-modern-office-with-businesspeople-working_1139-961.jpg?w=740&t=st=1678986515~exp=1678987115~hmac=c296c97a9d9ab9ffc64572f6d49251ff0db58cde6b45a4a07aad1f0d972b87e5",
  //       alt: "businessman leader in modern office",
  //       _id: "14518948226",
  //     },
  //     address: {
  //       state: "isreal",
  //       country: "isreal",
  //       city: "Tel aviv",
  //       street: "Street",
  //       houseNumber: 1,
  //       _id: "14518948226",
  //     },
  //     createAt: new Date().toString(),
  //   },
  //   {
  //     _id: "125161614",
  //     name: "Michael Levy",
  //     profession: "Carpenter",
  //     phone: "0501236454",
  //     email: "michael15@gmail.com",
  //     cardNumber: "125161614",
  //     image: {
  //       url: "https://img.freepik.com/free-photo/close-up-happy-executive_1098-768.jpg?w=740&t=st=1679164576~exp=1679165176~hmac=9e5eb2c7e157e461a4a950bb902e782e897dd672376c84d44ba55c2a00ceb57d",
  //       alt: "lose-up of happy executive ",
  //       _id: "125161614",
  //     },
  //     address: {
  //       state: "isreal",
  //       country: "isreal",
  //       city: "Petah Tikva",
  //       street: "Ha'atzmaut ",
  //       houseNumber: 50,
  //       _id: "125161614",
  //     },
  //     createAt: new Date().toString(),
  //   },
  //   {
  //     _id: "251616528941",
  //     name: "Sarah Bohbot",
  //     profession: "Saleswoman",
  //     phone: "0526545842",
  //     email: "Sarah1515@gmail.com",
  //     cardNumber: "251616528941",
  //     image: {
  //       url: "https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg?w=996&t=st=1679164648~exp=1679165248~hmac=523b77fc090b8c8ae3c23abecf039b803dc353bca8ab6f82aae38c200392c81a",
  //       alt: "smiling confident businesswoman ",
  //       _id: "251616528941",
  //     },
  //     address: {
  //       state: "isreal",
  //       country: "isreal",
  //       city: "Ramat Gan",
  //       street: "Yavne",
  //       houseNumber: 2,
  //       _id: "251616528941",
  //     },
  //     createAt: new Date().toString(),
  //   },
  // ];
  const { value, handleGetCards } = useCards();
  const { isPending, error, cards } = value;
  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeletecard = (_id) => console.log(`you deleted card namber:${_id}`);
  return (
    <Container>
      <PageHeader
        title="Cards"
        subtitle="Here you can find business cards from all categories"
      />
      <CardsFeedback
        isPending={isPending}
        error={error}
        cards={cards}
        onDelete={onDeletecard}
      />
    </Container>
  );
};

export default CardsPage;
