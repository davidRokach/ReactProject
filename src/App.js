import "./App.css";
import Layout from "./layout/Layout";
// import { SetPost } from "./sendbox/hooks/SetPost";
// import CardsPage from "./cards/pages/CardsPages";
// import Cards from "./cards/components/Cards";
// import { SetArray } from "./sendbox/hooks/SetArray";
// import Card from "./cards/components/card/Card";
// import AboutPage from "./pages/AboutPage";
// import { SetCounter } from "./sendbox/hooks/SetCounter";
// import { SetObject } from "./sendbox/hooks/SetObject";
// import OnClick from "./sendbox/events/OnClick";
// import RaisingEvents from "./sendbox/events/RaisingEvents";
// import LayoutComponents from "./components/LayoutComponents";
// import ListsComponents from "./components/ListsComponents";
// import FatherPropTypes from "./sendbox/propTypes/FatherPropTypes";
// import ChildComp from "./components/ChildComponent";
// import PageHeader from "./components/PageHeader";
// import TypographyComponent from "./components/TypographyComponent";
import CardsPages from "./cards/pages/CardsPages";
import ErorrPage from "./pages/ErorrPage";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  // const str = "Hello Word";
  // const name = { firstName: "David", lastName: "Rokach" };
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
