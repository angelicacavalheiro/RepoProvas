import "./reset.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./componentes/MainPage";
import Teachers from "./componentes/Teachers";
import Semesters from "./componentes/Semesters";
import Choice from "./componentes/Choice";
import SendTest from "./componentes/SendTest";
import Tests from "./componentes/Tests";
import TestsBySubject from "./componentes/TestsBySubject";

function App() {
  return (
    <BrowserRouter>
      <Switch>

        <Route path="/" exact>
          <MainPage />
        </ Route>

        <Route path="/choice" exact>
          <Choice />
        </ Route>

        <Route path="/teachers" exact>
          <Teachers />
        </ Route>

        <Route path="/semesters" exact>
          <Semesters />
        </ Route>

        <Route path="/tests/:id" exact>
          <Tests />
        </ Route>

        <Route path="/testsbysubject/:id" exact>
          <TestsBySubject />
        </ Route>

        tests by discipline

        <Route path="/sendTest" exact>
          <SendTest />
        </ Route>

      </ Switch>
    </ BrowserRouter>
  )
}

export default App;