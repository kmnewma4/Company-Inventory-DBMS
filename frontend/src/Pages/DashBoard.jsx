import React from "react";
import "../assets/Dashboard.css"; // Import your DashboardPage styling

const DashboardPage = () => {
  const buttonStyle = {
    color: "black",
    backgroundColor: "#d3d3d3",
    marginRight: "10px",
    fontFamily: "'Audrey', sans-serif", // Change 'Arial' to the desired font
  };
  const buttonStyle2 = {
    color: "white",
    backgroundColor: "black",
    marginRight: "10px",
    fontFamily: "'Audrey', sans-serif", // Change 'Arial' to the desired font
  };
  const buttonStyle3 = {
    backgroundColor: "pink", // Set button background color to pink
    marginRight: "10px",
    fontFamily: "'Audrey', sans-serif", // Change 'Arial' to the desired font
  };
  const titleStyle = {
    fontSize: "2.5em", // Adjust the font size as needed
    fontWeight: "bold", // Make the title bold
    textAlign: "center", // Center the title
    
  };
  const contributorsStyle = {
    textAlign: "right", // Align contributors to the right
    fontStyle: "italic", // Add italic style to contributors
    
  };
  const systemLabelStyle = {
    fontSize: "1.8em", // Adjust the font size to be smaller
    textAlign: "left", // Align to the left
    marginBottom: "10px", // Add some margin at the bottom
  };
  const inventoryHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  };
  const inventoryTitleStyle = {
    fontSize: "2em", // Adjust the font size of the inventory title
    fontWeight: "bold", // Make the title bold
  };
  const addInventoryButtonStyle = {
    backgroundColor: "pink", // Set button background color to pink
    color: "white",
    fontFamily: "'Audrey', sans-serif", // Change 'Arial' to the desired font
  };

  return (
    <div className="dashboard-page">
      {/* Top section */}
      <div className="top-section">
        <div className="top-left">
          <button className="btn btn-sign-up" style={buttonStyle3}>Sign Up</button>
          <button className="btn btn-view-files" style={buttonStyle}>View Files</button>
          <button className="btn btn-about" style={buttonStyle2}>About</button>
        </div>
        <div className="top-right">
          <h1 style={titleStyle}>Company Inventory System</h1>
        </div>
      </div>

      {/* Middle section */}
      <div className="middle-section">
        <div style={inventoryHeader}>
          <h2 className="title" style={inventoryTitleStyle}>Inventory</h2>
          <button className="btn btn-add-inventory" style={addInventoryButtonStyle}>Add Entry</button>
        </div>
        <table className="inventory-table">
          <thead>
            <tr>
              <th>Company Name</th>
              <th>Description</th>
              <th>More Info</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ABC Company</td>
              <td>Sample description...</td>
              <td><button className="btn btn-info" style={buttonStyle2}>Show Additional Info</button></td>
            </tr>
            
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>

      {/* New section for labels */}
      <div className="additional-info-section">
        
        <p style={contributorsStyle}>Contributors: ChaiT, Piyussh, Darius, Kendra</p>
      </div>
    </div>
  );
};

export default DashboardPage;
