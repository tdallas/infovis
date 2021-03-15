const csv = require("csv-parser");
const fs = require("fs");

const results = [];

fs.createReadStream("data-src/seats_held.csv")
  .pipe(csv())
  .on("data", (data) => {
    results.push(data);
  })
  .on("end", () => {
    fs.writeFile("seats_held.json", JSON.stringify(results), (error) => {
      if (error) throw error;
    });
  });

// right know i have results parsed
