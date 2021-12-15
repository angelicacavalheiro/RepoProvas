import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Choice from "./componentes/Choice";
import Teachers from "./componentes/Teachers";
import Semesters from "./componentes/Semesters";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <Choice />
        </ Route>

        <Route path="/teachers" exact>
          <Teachers />
        </ Route>

        <Route path="/semesters" exact>
          <Semesters />
        </ Route>

      </ Switch>
    </ BrowserRouter>
  )
}

export default App;