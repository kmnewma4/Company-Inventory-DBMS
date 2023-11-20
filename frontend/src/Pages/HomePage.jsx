import React, { useState, useEffect } from "react";
import "./../assets/HomePage.css";

const HomePage = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch data from your backend API
    fetch("http://localhost:3000/companies") // Replace with your actual backend API endpoint
      .then((response) => response.json())
      .then((data) => setCompanies(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Generate table rows and columns based on fetched data
  const generateTable = () => {
    return companies.map((company) => (
      <tr key={company.company_id}>
        <td>{company.company_id}</td>
        <td>{company.company_name}</td>
        <td>{company.address}</td>
        <td>{company.contact}</td>
        <td>Data 4</td>
      </tr>
    ));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Company ID</th>
            <th>Company Name</th>
            <th>Address</th>
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
