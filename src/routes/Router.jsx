import { Route, Routes } from "react-router-dom";
import ROUTES from "./routesModel";
import CardsPage from "../cards/pages/CardsPages";
import AboutPage from "../pages/AboutPage";
import ErorrPage from "../pages/ErorrPage";
import SandBox from "../sendbox/SandBox";

const Router = () => {
  return (
    <Routes>
      <Route path={ROUTES.CARDS} element={<CardsPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path="/sandbox" element={<SandBox />} />

      <Route path="*" element={<ErorrPage />} />
    </Routes>
  );
};
export default Router;
