// create express server
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const exercicesRouter = require("./Routers/Exercice.router")
const studentsRouter = require("./Routers/Student.router")

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
//************************************** */
app.use('/Exercices',exercicesRouter)
app.use('/Students',studentsRouter)

//************************************** */
app.listen(process.env.PORT, () =>
  console.log(`server connected on port ${process.env.PORT}`)
);

