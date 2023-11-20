import HomePage from "./Pages/HomePage";
import Navbar from "./Components/Navbar";
import LoginPage from "./Pages/LoginPage";


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      
      <LoginPage />

    </div>
  );
}

export default App;

/* sample fetch code
onst fetchData = async () => {
  try {
    const response = await fetch('http://localhost:3000/clients');
    const data = await response.json();
    console.log(data); // Process the retrieved data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

// Call the fetchData function when needed
fetchData();*/