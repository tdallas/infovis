import TableauReport from "tableau-react";

const options = { height: 1200, width: 1500 };

const vizs = {
  week9:
    "https://public.tableau.com/views/Week9_16161969194540/Hoja12?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  week11:
    "https://public.tableau.com/views/week11_16169614935230/Dashboard1?:language=es&:display_count=y&publish=yes&:origin=viz_share_link",
  argPopulation:
    "https://public.tableau.com/profile/tomas.dallas#!/vizhome/PoblacinArgentina_16176557357230/Dashboard1",
};

const Viz = ({ currentViz }) => {
  console.log("currentViz en viz", currentViz, vizs[currentViz]);
  return (
    <TableauReport
      options={options}
      query="?:embed=yes"
      url={vizs[currentViz] || ""}
    />
  );
};

export default Viz;
