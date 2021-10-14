import * as React from "react";
import { Switch, Route, Redirect, Router } from "react-router-dom";

// Components
import { Home } from "./Components/Home";

function App() {
  return (
    <>
      <div>Balls</div>
      {/* <Switch>
        <Route exact path="/" component={Home} />

        <Route render={() => <Redirect to="/" />} />
      </Switch> */}
    </>
  );
}

export default App;
