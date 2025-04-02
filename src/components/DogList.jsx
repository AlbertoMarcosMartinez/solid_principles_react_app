import React from 'react';
import '../css/DogList.css'; // Import the CSS file

const DogList = ({ dogBreeds }) => {
  return (
    <div className="dog-list">
      {dogBreeds.map(breed => (
        <div key={breed.id} className="dog-item">
          <img src={breed.image.url} alt={breed.name} className="dog-image" />
          <div className="dog-content">
            <h2 className="dog-name">{breed.name}</h2>
            <p className="dog-temperament">{breed.temperament}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DogList;