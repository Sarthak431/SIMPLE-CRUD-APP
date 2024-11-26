const express = require("express");
const productRoute = require("./routes/product.route.js"); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

app.use("/api/products", productRoute);

module.exports = app;