
import React, { useState, useEffect } from 'react';


function App() {

  const [dogImage, setDogImage] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        // Update the state with the received dog image URL
        setDogImage(data.message);
      });
  }, []); // Empty dependency array means this effect runs once after the initial render


  return (
    <div>
      <div className="App">
    {dogImage ? (
      <img src={dogImage} alt="A Random Dog" />
    ) : (
      <p>Loading...</p>
    )}
     </div>
  </div>
  );
}

export default App;
