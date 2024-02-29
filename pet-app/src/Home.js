import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'

function Home() {
  const navigate = useNavigate();

  const handleShowDogs = () => {
    navigate('/pets?type=dogs');
  };

  const handleShowCats = () => {
    navigate('/pets?type=cats');
  };

  return (
    <div>
      <h4>What kind of pet would you like to adopt?</h4>
      <div className="box">
        <div onClick={handleShowCats} className="img__wrap">
          <img
            className="image"
            src="https://ae01.alicdn.com/kf/HTB1KWxhXr1YBuNjSszeq6yblFXaK/5D-Diy-Diamond-Painting-Cross-Stitch-Cat-Stick-Its-Tongue-Out-Needlework-Diamond-Embroidery-Full-Round.jpg_640x640.jpg"
            alt="Cat"
          />
          <p className="img__description">
            Cat List<span role="img" aria-label="emoji">❤️</span>
          </p>
        </div>
        <div onClick={handleShowDogs} className="img__wrap">
          <img
            className="image"
            src="https://qph.fs.quoracdn.net/main-qimg-44de9537fb7ba0b62003689e25372019"
            alt="Dog"
          />
          <p className="img__description">
            Dog list<span role="img" aria-label="emoji">❤️</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
