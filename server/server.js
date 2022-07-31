const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/products", (req, res) => {
  fs.readFile("./products.json", "utf-8", (err, data) => {
    if (data) {
      const products = JSON.parse(data);
      res.send(products);
    }
  });
});

// app.get("/TV", (req, res) => {
//   fs.readFile("./TV.json", "utf-8", (err, data) => {
//     if (data) {
//       const TV = JSON.parse(data);
//       res.send(TV);
//     }
//   });
// });
// app.get("/closet", (req, res) => {
//   fs.readFile("./closet.json", "utf-8", (err, data) => {
//     if (data) {
//       const closet = JSON.parse(data);
//       res.send(closet);
//     }
//   });
// });
// app.get("/buffet", (req, res) => {
//   fs.readFile("./buffet.json", "utf-8", (err, data) => {
//     if (data) {
//       const buffet = JSON.parse(data);
//       res.send(buffet);
//     }
//   });
// });

app.listen(8000);

// const fs = require("fs");
// const express = require("express");
// const cors = require("cors");

// const app = express();
// app.use(cors());

// app.get("/products", (req, res) => {
//   fs.readFile("./data2.json", "utf-8", (err, data) => {
//     if (data) {
//       const products = JSON.parse(data);
//       res.send(products);
//     }
//   });
// });

// app.listen(8000);
