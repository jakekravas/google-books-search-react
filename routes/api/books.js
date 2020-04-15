const express = require('express');
const router = express.Router();

// Item Model
const Book = require('../../models/Book');

router.get("/", (req, res) => {
  Book.find()
  .sort({title: 1})
  .then(books => res.json(books));
})

router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    authors: req.body.authors,
    description: req.body.description,
    image: req.body.image,
    link: req.body.link
  });
  
  newBook.save().then(book => res.json(book))
});

router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
  .then(book => book.remove().then(() => res.json({success: true})))
  .catch(err => res.status(404));
});

module.exports = router;