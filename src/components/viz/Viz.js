import TableauReport from "tableau-react";
import { withRouter } from "react-router";

const extractVizFromPathname = (pathname) => {
  const paths = pathname.split("/");
  return paths[paths.length - 1];
};

const options = { height: 1000, width: 1100 };

const vizs = {
  week9:
    "https://public.tableau.com/views/Week9_16161969194540/Hoja12?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  week11:
    "https://public.tableau.com/views/week11_16169614935230/Dashboard1?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
};

const Viz = ({ location, currentViz }) => {
  return <TableauReport options={options} url={vizs[currentViz] || ""} />;
};

export default withRouter(Viz);
