const express = require("express");
const mongoose = require("mongoose");

const books = require("./routes/api/books");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://jakekravas:greycat2@cluster0-shard-00-00-x5pli.gcp.mongodb.net:27017,cluster0-shard-00-01-x5pli.gcp.mongodb.net:27017,cluster0-shard-00-02-x5pli.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority"
).then(() => console.log("MongoDB connected"));

// Use Routes
app.use("/api/books", books);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
})