import React from "react";
import NavBar from "./Components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";


function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/" exact component={Homepage}></Route>
        <Route></Route>
        <Route></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
