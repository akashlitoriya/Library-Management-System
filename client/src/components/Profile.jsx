import React from "react";
import { useState } from "react";

const Profile = () => {
  const [bookData, setBookData] = useState([]);
  return (
    <div className="p-28 text-white font-saira">
      <h1 className="text-4xl">name</h1>
      <h2 className="text-3xl">email</h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Book Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Issued On</th>
          </tr>
        </thead>
        <tbody>
          {bookData.map((book) => {
            return (
              <tr>
                <td className="border border-white px-4 py-2">{book.title}</td>
                <td className="border border-white px-4 py-2">{book.author}</td>
                <td className="border border-white px-4 py-2">
                  {book.issuedOn}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
