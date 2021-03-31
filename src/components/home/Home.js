import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const currentVizs = ["week9", "week11"];

const useStyles = makeStyles(() => ({
  button: {
    marginTop: "8px",
    marginBottom: "8px",
    marginBlockStart: "8px",
    marginBlockEnd: "8px",
    width: "100px",
  },
}));

const Home = ({ history }) => {
  const { button } = useStyles();

  const openViz = (viz) => () => {
    history.push(`/vizs/${viz}`);
  };

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

export default withRouter(Home);
