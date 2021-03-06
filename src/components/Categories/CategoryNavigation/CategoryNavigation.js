/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom';

const CategoryNavigation = () => (

  <nav className="navbar">
    <ul>
      <li><NavLink to="/">All</NavLink></li>
      <li><NavLink to="categories/Cat">Cats</NavLink></li>
      <li><NavLink to="categories/Dog">Dogs</NavLink></li>
      <li><NavLink to="categories/Parrot">Parrots</NavLink></li>
      <li><NavLink to="categories/Reptile">Reptiles</NavLink></li>
      <li><NavLink to="categories/Other">Other</NavLink></li>
    </ul>
  </nav>

);

export default CategoryNavigation;
