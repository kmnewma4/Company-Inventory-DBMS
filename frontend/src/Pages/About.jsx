import React from "react";
import "../assets/Dashboard.css"; // Import your DashboardPage styling

const AboutPage = () => {
    const buttonStyle = {
        color: "black",
        fontFamily: "'Audrey', sans-serif", // Change 'Arial' to the desired font
    };

    // Generated paragraphs
    const ourStory = "Our story began in a small classroom where four passionate individuals in a Computer Science class came together with a shared vision. We aimed to develop an innovative inventory management system catering to companies and their clients. This journey sparked from our desire to simplify inventory management and offer seamless accessibility.";

    const ourMission = "Our mission is to revolutionize the way businesses handle their inventory by providing a user-centric, efficient solution. We strive to create a comprehensive system that streamlines processes, empowers companies, and enhances client interactions. Our goal is to elevate operational efficiency while ensuring a user-friendly experience for all stakeholders.";

    const paragraphStyle = {
        maxWidth: "800px", // Adjust the maximum width as needed
        //margin: "0 auto", // Center the paragraphs horizontally
    };

    return (
        <div className="about-page">
            {/* Top section */}
            <div className="top-section">
                <div className="top-left">
                    <button className="btn btn-back" style={buttonStyle}>Back</button>
                </div>
                
            </div>

            {/* Middle section */}
            <div className="middle-section">
                <div style={paragraphStyle}>
                    <h2 className="title">Our Story</h2>
                    <p>{ourStory}</p>

                    <h2 className="title">Our Mission</h2>
                    <p>{ourMission}</p>
                </div>
            </div>

            {/* Bottom section */}
            <div className="bottom-section">
                <button className="btn btn-contact" style={buttonStyle}>Contact Us</button>
            </div>
        </div>
    );
};

export default AboutPage;
