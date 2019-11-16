const mongoose = require("mongoose");
// requring mangoose scrapper 
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  // creating mangoose COLUMNS  TITTLE, SUBTITTLE,AUTHORS,LINKDESC AND 
  // IMAGE , GOOGEL ID 
  title: { type: String, required: true },
  subtitle: { type: String },
  authors: { type: [String], required: true },
  link: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  googleId: { type: String, required: true, unique: true }
});

const Book = mongoose.model("Book", bookSchema);
// EXPORTINMG THE MODULE BOOK 

module.exports = Book;
