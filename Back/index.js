// create express server
const express = require("express");
const mongoose = require("mongoose");
const app = express();
//const actorsRouter = require("./routes/actors.routes")

require("dotenv").config();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Server express connected on port 3000");
});
mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection
db.on('open', () =>  console.log(`connected to database mongodb  ${process.env.URL}`) )

app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);

