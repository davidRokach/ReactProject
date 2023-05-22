import React from "react";
import Spinner from "../../components/Spinner";
import Erorr from "../../components/Error";
import Cards from "./Cards";
import { arrayOf, bool, func, object, string } from "prop-types";
import Card from "./card/Card";

const CardsFeedback = ({ error, cards, isPending, onDelete, card = null }) => {
  if (isPending) return <Spinner />;
  if (error) return <Erorr errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <p>
        Oopsi... there are no cards in the dadabase that match the parameters
        you enter
      </p>
    );
  if (cards) return <Cards cards={cards} onDelete={onDelete} />;
  if (card) return <Card card={card}></Card>;
};
CardsFeedback.prototype = {
  isPending: bool.isRequired,
  error: string,
  cards: arrayOf(object),
  onDelete: func,
};

export default CardsFeedback;