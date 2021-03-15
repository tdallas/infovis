import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
//d3
import rd3 from "react-d3-library";
import node from "./seats_d3.js";
const RD3Component = rd3.Component;

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
  //   const { root } = useStyles();
  //   return <Button className={root}>Hello World</Button>;
  return (
    <div>
      <RD3Component data={node} />
    </div>
  );
};
