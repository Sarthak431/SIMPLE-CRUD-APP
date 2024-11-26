const mongoose = require("mongoose");
const app = require("./app.js");

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
