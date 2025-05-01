const Book = require("./book.model");

const postABook = async(req,res) => {
    //insert into db easily
    try{
        const newBook = await Book({...req.body});
        await newBook.save();//save
        res.status(200).send({message: "Book posted successfully", book: newBook})
    }catch(error)
    {
        console.log("Error creating book",error);
        res.status(500).status({message:" Failed to create book"})
    }
}

// get all books
const getAllBooks = async(req,res) => {
    try{
        //const books = await Book.find({createdAt:-1});
        const books = await Book.find().sort({ createdAt: -1 });
        res.status(200).json(books)
    }catch(error){
        console.log("Error fetching book",error);
        res.status(500).status({message:" Failed to fetch book"})
    }
    
}

//single book
const getSingleBook = async(req,res) =>{
    try{
        const {id} = req.params;
        const book = await Book.findById(id)
        if(!book)
        {
            res.status(404).send({message: "Book not Found!"})
        }
        res.status(200).send(book)
    }catch(error){
        console.log("Error fetching book",error);
        res.status(500).status({message:" Failed to fetch book"})
    }
}

//update book data

const UpdateBook =  async(req,res) => {
    try{
       const {id} = req.params;
       const updatedBook = await Book.findByIdAndUpdate(id, req.body,{new: true})
       (!updatedBook)
       {
        res.status(404).send({message: "Book is not Found!"})
       }
       res.status(200).send({
        message: "Book updated Successfully",
        book: updatedBook
       })
    }catch(error)
    {
        console.log("Error updating a book",error);
        res.status(500).status({message:" Failed to update book"})
    }
}

const deleteABook = async(req,res) =>{
    try{
        const {id} = req.params;
        const deletedBook = await Book.findByIdAndDelete(id);
        if(!deletedBook)
        {
            res.status(400).send({message: "Book is not found"})
        }
        res.status(200).send({
            message: "Book deleted Successfully",
            book: deletedBook
           })
    }catch(error){
        console.log("Error deleting a book",error);
        res.status(500).status({message:" Failed to delete a book"})
    }
    
}

module.exports={
    postABook,
    getAllBooks,
    getSingleBook,
    UpdateBook,
    deleteABook
}