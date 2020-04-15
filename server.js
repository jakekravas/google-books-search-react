const express = require("express");
const mongoose = require("mongoose");

const books = require("./routes/api/books");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
).then(() => console.log("MongoDB connected"));

// Use Routes
app.use("/api/books", books);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})