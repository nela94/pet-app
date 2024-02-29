import Petcard from './Petcard';

export const renderSwipedLeftPets = (swipedLeftPets) => {
    return swipedLeftPets.map((pet) => (
        <Petcard key={pet.id} pet={pet} origin="swipedLeftPets" />
      ));
    }