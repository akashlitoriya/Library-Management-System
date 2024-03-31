import React, { useState, useEffect } from "react";
import BookItem from "./BookItem"; // Assuming you have a BookItem component to render individual books
import Pagination from "./Pagination"; // Assuming you have a Pagination component
import axios from "axios";

function BookCatalogPage() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(10); // Adjust as needed

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get("/api/books"); //api call
  //       setBooks(response.data);
  //     } catch (error) {
  //       console.error("Error fetching books:", error);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  // Get current books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h1>Discover Your Next Read: Explore Our Book Catalog</h1>
      <div className="search-filter">
        {/* Search and filter options here */}
        <input type="text" placeholder="Search by title, author, genre..." />
        {/* Filter options dropdowns or checkboxes */}
      </div>
      <div className="book-list">
        {currentBooks.length > 0 &&
          currentBooks.map((book) => <BookItem key={book.id} book={book} />)}
      </div>
      <Pagination
        booksPerPage={booksPerPage}
        totalBooks={books.length}
        paginate={paginate}
      />
    </div>
  );
}

export default BookCatalogPage;
