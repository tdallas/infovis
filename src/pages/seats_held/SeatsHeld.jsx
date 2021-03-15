import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { getSeatsParsed } from "../../viz/seats_held_by_woman";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
});

export const SeatsHeld = () => {
  const { root } = useStyles();
  console.log("seats held parsed", getSeatsParsed());
  return <Button className={root}>Hello World</Button>;
};
