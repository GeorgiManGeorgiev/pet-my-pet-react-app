const url = 'http://localhost:5000/pets';

export const getAll = (category = '') => {
  const petUrl = url + (category ? `?category=${category}` : '');
  return fetch(petUrl)
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export const getOne = (petId) => fetch(`${url}/${petId}`)
  .then((res) => res.json())
  .catch((err) => console.log(err));

export const create = (petName, description, imageURL, category) => {
  const pet = {
    name: petName,
    description,
    imageURL,
    category,
    likes: 0,
  };
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(pet)
  });
};

export const update = (petId, pet) => fetch(`${url}/${petId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(pet)
});

export const pet = (petId, likes) => fetch(`${url}/${petId}`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ likes })
}).then((res) => res.json());
