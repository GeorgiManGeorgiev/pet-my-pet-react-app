/* eslint-disable react/jsx-props-no-spreading */
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet';
import * as petsService from '../../services/petsService';

const Categories = () => {
  const [pets, setPets] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    petsService.getAll(category).then((res) => setPets(res));
  }, [category]);

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <CategoryNavigation />
      <ul className="other-pets-list">
        {pets.map((x) => <Pet key={x.id} {...x} />)}
      </ul>
    </section>
  );
};
export default Categories;
