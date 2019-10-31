const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const users = require("./routes/api/users");

const app = express();

app.get("/", (req, res) => res.send("API Running"));

app.use(express.json({ extended: false }));

const db = require("./config/default").mongoURI;

mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

app.use("/api/users", users);

app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on ${port}`));
