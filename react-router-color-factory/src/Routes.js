import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";
import ColorPage from "./ColorPage";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

function Routes() {
  let colorsSaved = JSON.parse(localStorage.getItem("colors")) || [
    "red",
    "purple",
    "pink",
  ];
  const [colors, addColor] = useState(colorsSaved);
  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );
  return (
    <Switch>
      <Route exact path="/colors">
        <ColorList colors={colors} />
      </Route>
      <Route exact path="/colors/new">
        <NewColorForm addColor={addColor} colors={colors} />
      </Route>
      <Route exact path="/colors/:color">
        <ColorPage />
      </Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
