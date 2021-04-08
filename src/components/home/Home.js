import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const currentVizs = ["week9", "week11", "argPopulation"];

const useStyles = makeStyles(() => ({
  button: {
    marginTop: "8px",
    marginBottom: "8px",
    marginBlockStart: "8px",
    marginBlockEnd: "8px",
    width: "130px",
  },
}));

const Home = ({ setCurrentViz }) => {
  const { button } = useStyles();

  const openViz = (viz) => () => setCurrentViz(viz);

  return currentVizs.map((viz) => (
    <Button
      className={button}
      onClick={openViz(viz)}
      color="primary"
      variant="contained"
    >
      {viz}
    </Button>
  ));
};

export default Home;
