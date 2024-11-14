const express = require("express")
const route = express.Router();
const bookcontroller = require("../Controller/bookController")

route.post("/booksave",bookcontroller.BookSave)
route.get("/bookdisplay",bookcontroller.BookDisplay)

module.exports = route