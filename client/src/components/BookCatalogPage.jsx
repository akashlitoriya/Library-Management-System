import React, { useState, useEffect } from "react";
import BookItem from "./BookItem"; // Assuming you have a BookItem component to render individual books
import Pagination from "./Pagination"; // Assuming you have a Pagination component
import { getBooks } from "../service/Auth Operations/BookOperations";

function BookCatalogPage() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10); // Adjust as needed

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const response = await getBooks();
    setBooks(response.data);
  }

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="md:px-8 md:py-6 px-4 py-2 w-[92vw] h-screen">
      <h1 className="text-3xl text-white font-orbitron font-bold">
        Discover Your Next Read: Explore Our Book Catalog
      </h1>

      <div className="book-list md:mt-10 mt-6 overflow-y-scroll flex flex-wrap gap-3">
        {currentBooks.length > 0 &&
          currentBooks.map((book) => <BookItem key={book._id} book={book} />)}
      </div>
    </div>
  );
}

export default BookCatalogPage;
