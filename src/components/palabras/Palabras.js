const { palabras } = require("../../palabras.json");

const Palabras = () => palabras.map((palabra) => <p>{palabra}</p>);

export default Palabras;
