const csv = require("csv-parser");
const fs = require("fs");

const results = {};

fs.createReadStream("../data-src/seats_held.csv")
  .pipe(csv())
  .on("data", (data) => {
    const { Location } = data;
    delete data.Location;
    results[Location] = data;
  })
  .on("end", () => console.log("results", results));

// right know i have results parsed

