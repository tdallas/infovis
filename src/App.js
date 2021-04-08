import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Palabras from "./components/palabras/Palabras";
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

const HomeOrViz = ({ currentViz, setCurrentViz }) =>
  currentViz === undefined ? (
    <Home setCurrentViz={setCurrentViz} />
  ) : (
    <Viz currentViz={currentViz} />
  );

const App = () => {
  const { app } = useStyles();
  const isPalabras = window.location.href.includes("palabras");
  const [currentViz, setCurrentViz] = useState(
    isPalabras ? undefined : extractVizFromPathname(window.location.search)
  );
  return (
    <div className={app}>
      {!isPalabras ? HomeOrViz({ currentViz, setCurrentViz }) : <Palabras />}
    </div>
  );
};

export default App;
