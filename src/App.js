import React, { useEffect, useState } from 'react';
import './styles/App.css'; // Import your CSS file for styling

function App() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    fetch('https://bemil.se/api/db') // Adjust the endpoint if necessary
      .then(response => response.json())
      .then(data => {
        setCars(data);
        setLoading(false); // Set loading to false after fetching data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Car List</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="car-list">
            {cars.map((car, index) => (
              <li key={index} className="car-item">
                <img src={car.image} alt={car.model} className="car-image" />
                <div className="car-details">
                  <h2>{car.brand} {car.model}</h2>
                  <p>Year: {car.year}</p>
                  <p>Color: {car.color}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </header>
    </div>
  );
}

export default App;
