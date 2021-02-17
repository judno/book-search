const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  authors: [String],
  description: String,
  image: String,
  link: String,
  title: { type: String, required: true },
});

const Book = mongoose.model("Book", BookSchema);

module.exports = {
  Book,
};
