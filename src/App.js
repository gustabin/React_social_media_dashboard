import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./Header";
import Topcardslist from "./Topcardslist";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <Header />
      <Topcardslist />
    </Fragment>
  );
}

export default App;
