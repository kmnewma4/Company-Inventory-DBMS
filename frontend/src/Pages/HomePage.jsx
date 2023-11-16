// Navbar.js
import React from "react";
import "./../assets/HomePage.css";

const HomePage = () => {
  // Generate table rows and columns
  const generateTable = () => {
    const rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(
        <tr key={i}>
          <td>Company {i}</td>
          <td>Data 1</td>
          <td>Data 2</td>
          <td>Data 3</td>
          <td>Data 4</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
            <th> Address</th>
            <th>Contact</th>
            <th>Header 5</th>
          </tr>
        </thead>
        <tbody>{generateTable()}</tbody>
      </table>
    </div>
  );
};

export default HomePage;
