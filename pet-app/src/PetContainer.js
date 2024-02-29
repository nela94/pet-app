import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Client } from "@petfinder/petfinder-js";
import Petcard from './Petcard';
import './Pet.css';
import Swipeable from "react-swipy";

const PetContainer = () => {
  const [swipedLeftPets, setSwipedLeftPets] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [cats, setCats] = useState([]);
  const [index, setIndex] = useState(0);
  let direction = '';
  const location = useLocation();

  useEffect(() => {
    const client = new Client({
      apiKey: 'LoNa7Ywt2U5nIsri24c5A43mqRLtGfKycmlcNvsxvWDgt7H5PN',
      secret: 'ukOA5R6hiU5p6L6mIMexs4rP3oOPr5TEoKWTiW7U'
    });
 
    client.animal.search({ type: "Doggg" })
    .then(response => {
      console.log('Response for dogs:', response); // Log the response
      setDogs(response.data.animals);
    })
      .catch(error => console.error('Error fetching dogs:', error));

    client.animal.search({ type: "Cat" })
      .then(response => setCats(response.data.animals))
      .catch(error => console.error('Error fetching cats:', error));
  }, []);

  const handleSwipeLeft = (pet) => {
    setSwipedLeftPets((prevPets) => [...prevPets, pet]);
    setIndex((prevIndex) => prevIndex + 1);
  };

  const renderSwipedLeftPets = () => {
    return swipedLeftPets.map((pet) => (
      <Petcard key={pet.id} pet={pet} origin="swipedLeftPets" />
    ));
  };

  const onAfterSwipe = (pet) => {
    if (direction === 'left') {
      handleSwipeLeft(pet);
      setIndex(index + 1);
    } else if (direction === 'right') {
      const updatedDogs = pet.type === 'Dog' ? dogs.filter(dog => dog.id !== pet.id) : dogs;
      const updatedCats = pet.type === 'Cat' ? cats.filter(cat => cat.id !== pet.id) : cats;
      setDogs(updatedDogs);
      setCats(updatedCats);
      setIndex(index + 1);
    }
  };

  const makingOneCat = cats.map((cat, idx) => (
    <Swipeable
      key={cat.id}
      onSwipe={dir => { direction = dir }}
      onAfterSwipe={() => onAfterSwipe(cat)}>
      <Petcard
        hidden={idx !== index}
        origin={'petContainer'}
        key={cat.id}
        pet={cat} />
    </Swipeable>
  ));

  const makingOneDog = dogs.map((dog, idx) => (
    <Swipeable key={dog.id}
      onSwipe={dir => { direction = dir }}
      onAfterSwipe={() => onAfterSwipe(dog)}>
      <Petcard
        hidden={idx !== index}
        origin={'petContainer'}
        key={dog.id}
        pet={dog} />
    </Swipeable>
  ));

  if (location.search === "?type=cats") {
    return (
      <div id="wrapper" className="pet-container">
        <h2>Start Swiping<span role="img" aria-label="emoji">❤️</span></h2>
        <h3>Swipe Left To Add To Your Adoption List</h3>
        <div className="card">{makingOneCat}</div>
      </div>
    );
  } else if (location.search === "?type=dogs") {
    return (
      <div id="wrapper" className="pet-container">
        <h2>Start Swiping<span role="img" aria-label="emoji">❤️</span></h2>
        <h3>Swipe Left To Add To Your Adoption List</h3>
        <div className="card">{makingOneDog}</div>
      </div>
    );
  } else {
    return (
      <div>Sorry we don't have that type of pet available yet</div>
    );
  }
};

export default PetContainer
