// import React, { useState } from "react";
// import AnimalsShows from "./AnimalsShows";

// function getRendomAnimals() {
//   const animals = ["cat", "dog", "rat", "horse", "mouse"];
//   return animals[Math.floor(Math.random() * animals.length)];
// }
// function App() {
//   const [animals, setAnimals] = useState([]);
//   const handleClick = () => {
//     setAnimals([...animals, getRendomAnimals()]);
//   };

//   const rendomAnimals = animals.map((animal, index) => {
//     return <AnimalsShows type={animal} key={index} />;
//   });
//   return (
//     <div>
//       <button onClick={handleClick}>Add Animals</button>
//       <div>{rendomAnimals}</div>
//     </div>
//   );
// }

// export default App;

//second app compnent...

import React, { useState } from "react";
import searchImages from "./api";
// import "./App.css";
import ImageList from "./components/ImageList";
import SearchBar from "./components/SearchBar";
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    // console.log("Do a Search with", term);
    setImages(result);
  };
  return (
    <div className="App">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
