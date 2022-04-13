/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CategoryNavigation from './CategoryNavigation/CategoryNavigation';
import Pet from '../Pet/Pet';

function Categories() {
  const [pets, setPets] = useState([]);
  const { category } = useParams();

  useEffect(async () => {
    const queryString = category ? `?category=${category}` : '';

    fetch(`http://localhost:5000/pets${queryString}`)
      .then((res) => res.json())
      .then((res) => setPets(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <CategoryNavigation />
      <ul className="other-pets-list">
        {pets.map((x) => <Pet key={x.id} {...x} />)}
      </ul>
    </section>
  );
}
export default Categories;
