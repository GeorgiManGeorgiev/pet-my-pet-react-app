const url = 'http://localhost:5000/pets';

export const getAll = async (category = '') => {
  const petUrl = url + (category ? `?category=${category}` : '');
  console.log(petUrl);
  return fetch(petUrl).then((res) => res.json()).catch((err) => console.log(err));
};
export const getOne = async (petId) => fetch(`${url}/${petId}`)
  .then((res) => res.json())
  .catch((err) => console.log(err));
