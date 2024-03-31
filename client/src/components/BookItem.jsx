import React from "react";

function BookItem({ book }) {
  return (
    <div className="book-item">
      <h2>{book.title}</h2>
      <p>
        <strong>Author:</strong> {book.author}
      </p>
      <p>
        <strong>Genre:</strong> {book.genre}
      </p>
      {/* Add more book details as needed */}
      <button className="borrow-btn">Borrow</button> {/* For borrowers */}
      <button className="manage-btn">Manage</button> {/* For librarians */}
    </div>
  );
}

export default BookItem;
