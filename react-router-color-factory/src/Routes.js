import React, { useState } from "react";
import { Route, Switch, Redirect, useParams } from "react-router-dom";
import ColorPage from "./ColorPage";
import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";

function Routes() {
  const [colors, addColor] = useState(["red", "purple", "pink"]);

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
