import { useCallback, useMemo, useState } from "react";
import {
  changeLikesStatus,
  creactCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
import useAxios from "./useAxios";
import { useSnackbar } from "../../provider/SnackbarProvider";
import normalizeCards from "../helpers/normalization/normalizeCards";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";

const useCards = () => {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setPending] = useState(false);

  const navigate = useNavigate();
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
      return card;
      // snack("you get the card successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleGetmyCards = useCallback(async () => {
    try {
      setPending(false);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleCreateCard = useCallback(async (cardFormClient) => {
    try {
      setPending(false);
      const normalizedCard = normalizeCards(cardFormClient);
      const card = await creactCard(normalizedCard);
      requestStatus(false, null, null, card);
      snack("you create the card successfully", "success");
      navigate(ROUTES.MY_CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleUpdateCard = async (cardId, newCard) => {
    try {
      setPending(false);
      const card = await editCard(cardId, newCard);
      requestStatus(false, null, null, card);
      snack("you update the card successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setPending(false);
      await deleteCard(cardId);
      snack("you delete the card successfully", "success");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = async (cardId) => {
    try {
      setPending(false);
      const card = await changeLikesStatus(cardId);

      requestStatus(false, null, cards, card);
    } catch (error) {
      requestStatus(false, error, null);
    }
  };

  const value = useMemo(
    () => ({
      card,
      cards,
      isPending,
      error,
    }),
    [card, cards, isPending, error]
  );

  return {
    value,
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
