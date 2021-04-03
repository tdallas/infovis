import React, { useState } from "react";
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

const extractVizFromPathname = (pathname) => {
  if (!pathname.includes("?viz=")) {
    return undefined;
  }
  const paths = pathname.split("=");
  return paths.length == 2 ? paths[paths.length - 1] : undefined;
};

const currentVizs = ["week9", "week11"];

const App = () => {
  const { app } = useStyles();
  const [currentViz, setCurrentViz] = useState(
    extractVizFromPathname(window.location.search)
  );
  console.log("currentViz", currentViz);
  return (
    <div className={app}>
      {currentViz === undefined ? (
        <Home setCurrentViz={setCurrentViz} />
      ) : (
        <Viz currentViz={currentViz} />
      )}
      {/* {currentVizs.map((viz) => (
        <Viz currentViz={viz} />
      ))} */}
    </div>
  );
};

export default App;
