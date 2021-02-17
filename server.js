require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const path = require("path");
const { Book } = require("./models");

const PORT = process.env.PORT || 3001;
const app = express();

async function init() {
  await mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  // Define middleware here
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.get("/api/books", async (req, res) => {
    try {
      const books = await Book.find({});

      res.json(books);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });

  app.post("/api/books", async (req, res) => {
    try {
      const newBook = await Book.create(req.body);

      res.json(newBook);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });

  app.delete("/api/books/:id", async (req, res) => {
    try {
      await Book.deleteOne({ _id: req.params.id });

      res.sendStatus(200);
    } catch (e) {
      console.error(e);
      res.sendStatus(500);
    }
  });

  // Send every other request to the React app
  // Define any API routes before this runs
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

  app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });
}

init();
