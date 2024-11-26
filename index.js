const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js"); 

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

app.use("/api/products", productRoute);

mongoose
  .connect(
    "mongodb+srv://singhsarthakindia:ngGwHGruEVsYNWJ5@cluster0.imipe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to DB!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000 ");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
