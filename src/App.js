import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Viz from "./components/viz/Viz";
import Home from "./components/home/Home";

const useStyles = makeStyles((theme) => ({
  app: {
    "& > *": {
      margin: theme.spacing(1),
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "8px",
  },
}));

const currentVizs = ["week9", "week11"];

const App = () => {
  const { app } = useStyles();

  return (
    <div className={app}>
      <Route exact path="/">
        <Home />
      </Route>
      {currentVizs.map((viz) => (
        <Route exact path={`/vizs/${viz}`}>
          <Viz currentViz={viz} />
        </Route>
      ))}
    </div>
  );
};

export default App;
