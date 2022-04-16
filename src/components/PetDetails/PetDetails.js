/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as petsService from '../../services/petsService';

const PetDetails = () => {
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  useEffect(async () => {
    await petsService.getOne(petId).then((res) => setPet(res));
  }, [petId]);

  return (

    <section className="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter:
        {' '}
        {pet.likes}
        {' '}
        <a href="#">
          <button className="button">
            <i className="fas fa-heart" />
            Pet
          </button>
        </a>
      </p>
      <p className="img"><img src={pet.imageURL} alt="pet" /></p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
        <Link to={`/pets/details/${pet.id}/edit`}><button className="button">Edit</button></Link>
        <Link to="#"><button className="button">Delete</button></Link>
        <i className="fas fa-heart" />

      </div>
    </section>

  );
};

export default PetDetails;
