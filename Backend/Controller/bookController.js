const Author = require("../Models/authorModel")
const Book = require("../Models/bookModel")

const BookSave=async(req,res)=>{
      const {authorname,bookname,price} = req.body;
     const author = await Author.create({
        author_name:authorname
     })
     
     const book = await Book.create({
        book_name:bookname,
        book_pricr:price,
        auther_id:author._id
     })
     await Author.findByIdAndUpdate(author._id,{$push:{author_books:book._id}})
     res.send(author);
}
const BookDisplay=async(req,res)=>{
    const authorData = await Author.find().populate("author_books");
    res.send(authorData)
}

module.exports = {
    BookSave,
    BookDisplay
}