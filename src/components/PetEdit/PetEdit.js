import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as petService from '../../services/petsService';
import InputError from '../Shared/InputError/InputError';

const PetEdit = () => {
  const [pet, setPet] = useState({});
  const { petId } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  useEffect(async () => {
    petService.getOne(petId).then((res) => setPet(res));
  }, [petId]);

  const onDescriptionSaveSubmit = (e) => {
    e.preventDefault();
    const updatedPet = { ...pet, description: e.target.description.value };
    petService.update(petId, updatedPet).then(() => {
      navigate(`/pets/details/${petId}`);
    });
  };

  const onDescriptionChangeHandler = (e) => {
    if (e.target.value.length < 10) {
      setErrorMessage('Description too short');
    } else {
      setErrorMessage('');
    }
  };
  return (
    <section className="detailsMyPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter:
        <i className="fas fa-heart" />
        {' '}
        {pet.likes}
      </p>
      <p className="img"><img src={pet.imageURL} alt="pet" /></p>
      <form onSubmit={onDescriptionSaveSubmit}>
        <textarea type="text" name="description" onBlur={onDescriptionChangeHandler} defaultValue={pet.description} />
        <InputError>{errorMessage}</InputError>
        <button type="submit" className="button"> Save</button>
      </form>
    </section>
  );
};

export default PetEdit;
