const csv = require("csv-parser");
const fs = require("fs");

const results = [];

fs.createReadStream("data-src/harvested_crops.csv")
  .pipe(csv())
  .on("data", (data) => {
    delete data.Flag;
    delete data["Flag Description"];
    results.push(data);
  })
  .on("end", () => {
    fs.writeFile("harvested_crops.json", JSON.stringify(results), (error) => {
      if (error) throw error;
    });
  });

// right know i have results parsed
