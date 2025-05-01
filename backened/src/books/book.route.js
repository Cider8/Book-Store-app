const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, UpdateBook, deleteABook } = require('./book.controller');
const router = express.Router();
const verifyAdminToken = require('../middleware/verifyAdminToken')

//frontened => backened server =>backened=>controller=> book schema => db => senda response => back to the frontened

 //post a book
//post = when something frontemed to db
//get = when get something  back from db
//put/patch = when you edit or update data
router.post("/create-book",verifyAdminToken,postABook)

//get all books
router.get("/",getAllBooks)

//single-book endpoint
router.get("/:id",getSingleBook)

//update a book endpoint
router.put("/edit/:id",verifyAdminToken,UpdateBook)

router.delete("/:id",verifyAdminToken,deleteABook)


module.exports = router;