import { SeatsHeld } from "./pages/seats_held/SeatsHeld";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  app: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "8px",
  },
});

const App = () => {
  const { app } = useStyles();
  return (
    <div className={app}>
      <SeatsHeld />
    </div>
  );
};

export default App;
