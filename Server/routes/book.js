const express = require("express");

const router = express.Router();

//importing the controller
const {
  getAvailableBooks,
  getBorrowersOfBook,
  addBook,
} = require("../controllers/Books");

//auth
const { auth, isBorrower, isLibrarian } = require("../middleware/auth");

router.get("/getAvailableBooks", getAvailableBooks);
router.get("/get=:bookId", auth, isLibrarian, getBorrowersOfBook);
router.post("/addBook", auth, isLibrarian, addBook);

module.exports = router;
