import { useState } from "react";
import {
  changeLikesStatus,
  creactCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
import useAxios from "./useAxios";
import { useSnackbar } from "../../provider/SnackbarProvider";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setPending(loading);
    setCards(cards);
    setCard(card);
    setError(errorMessage);
  };

  useAxios();

  const snack = useSnackbar();

  const handleGetCards = async () => {
    try {
      setPending(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetCard = async (cardId) => {
    try {
      setPending(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      snack("you get the card successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };
  const handleGetmyCards = async () => {
    try {
      setPending(false);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleCreateCard = async (cardFormClient) => {
    try {
      setPending(false);
      const card = await creactCard(cardFormClient);
      requestStatus(false, null, null, card);
      snack("you create the card successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = async (cardFormClient) => {
    try {
      setPending(false);
      const card = await editCard(cardFormClient);
      requestStatus(false, null, null, card);
      snack("you update the card successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId) => {
    try {
      setPending(false);
      await editCard(cardId);
      snack("you delete the card successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleLikeCard = async (cardId) => {
    try {
      setPending(false);
      const cards = await getCards();
      const card = await changeLikesStatus(cardId);

      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  return {
    card,
    cards,
    isPending,
    error,
    handleGetCards,
    handleGetCard,
    handleGetmyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
  };
};

export default useCards;
