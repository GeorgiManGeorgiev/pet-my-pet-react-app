/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/function-component-definition */
import { Link } from 'react-router-dom';

function PetCard({
  id,
  name,
  description,
  imageURL,
  category,
  likes,

}) {
  return (
    <li className="otherPet">
      <h3>
        Name:
        {' '}
        {name}
      </h3>
      <p>
        Category:
        {' '}
        {category}
      </p>
      <p className="img"><img src={imageURL} alt="pet" /></p>
      <p className="description">{description}</p>
      <div className="pet-info">
        <Link to="#">
          <button className="button">
            <i className="fas fa-heart" />
            Pet
          </button>
        </Link>
        <Link to={`/pets/details/${id}`}><button className="button">Details</button></Link>
        <i className="fas fa-heart" />
        <span>
          {likes}
        </span>
      </div>
    </li>
  );
}

export default PetCard;
