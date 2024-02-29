import React from 'react';

const Petcard = ({ pet, origin, hidden, handleDeletePetFromList, handleOnClick }) => {
  let photos = [];

  if (origin === 'petContainer') {
    photos = pet.photos.map(photo => photo.small && photo.medium && photo.large && photo.full);
    if (photos.length === 0) {
      photos = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png';
    }
  }

  return (
    !hidden && (
      <div className="card-container-master">
        {origin === 'petContainer' ? (
          <div>
            <div className="card-img embed-responsive embed-responsive-1by1">
              <div className="embed-responsive-item">
                <img src={photos} alt="card-title" />
              </div>
            </div>
            <div className="card-body">
              <h1 className="card-title">{pet.name}</h1>
              <p className="card-text">{pet.description}</p>
            </div>
          </div>
        ) : (
          <div className="card-flex">
            <div className="card-img embed-responsive embed-responsive-1by1">
              <div className="embed-responsive-item">
                <span onClick={() => handleDeletePetFromList(pet)} className="close">&times;</span>
                <img src={pet.img_full} alt="card-title" />
              </div>
            </div>
            <div className="card-body">
              <h1 className="card-title">{pet.name}</h1>
              <p className="card-text">{pet.description}</p>
              <button onClick={() => handleOnClick(pet)} className="btn btn-primary">Adopt this cutie!</button>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Petcard;
