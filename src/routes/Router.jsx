import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPages";
import AboutPage from "../pages/AboutPage";
import ErorrPage from "../pages/ErorrPage";
import SandBox from "../sendbox/SandBox";
import SingUpPage from "../users/pages/SingUpPage";
import LoginPage from "../users/pages/LoginPage";
import CardDetailPage from "../cards/pages/CardDetailPage";
import PropTypeChild from "../sendbox/propTypes/PropTypeChild";
import { SetArray } from "../sendbox/hooks/SetArray";
import OnClick from "../sendbox/events/OnClick";
import { SetCounter } from "../sendbox/hooks/SetCounter";
import { SetObject } from "../sendbox/hooks/SetObject";
import { SetPost } from "../sendbox/hooks/SetPost";
import Hooks from "../sendbox/hooks/Hooks";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SINGUP} element={<SingUpPage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={`${ROUTES.CARD_INFO}/:id`} element={<CardDetailPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />}>
        <Route path={"props"} element={<PropTypeChild />} />
        <Route path={"hooks"} element={<Hooks />}>
          <Route path={"SetArray"} element={<SetArray />} />
          <Route path={"SetCounter"} element={<SetCounter />} />
          <Route path={"SetObject"} element={<SetObject />} />
          <Route path={"SetPost"} element={<SetPost />} />
        </Route>
        <Route path={"events"} element={<OnClick />} />
      </Route>

      <Route path="*" element={<ErorrPage />} />
    </Routes>
  );
};
export default Router;
