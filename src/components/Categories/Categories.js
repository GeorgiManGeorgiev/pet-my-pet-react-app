/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import PetCard from '../PetCard/PetCard';
import * as petsService from '../../services/petsService';

const Categories = () => {
  const [pets, setPets] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    petsService.getAll(category).then((res) => setPets(res));
    // if (Math.random() > 0.5) {
    //   throw new Error('Something whent wrong');
    // }
  }, [category]);

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <CategoryNavigation />
      <ul className="other-pets-list">
        {pets.map((x) => <PetCard key={x.id} {...x} />)}
      </ul>
    </section>
  );
};
export default Categories;
