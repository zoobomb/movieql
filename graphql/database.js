export const people = [
  {
    id: 1,
    name: "Hajoo",
    age: 39,
    gender: "female",
  },
  {
    id: 2,
    name: "Simon",
    age: 42,
    gender: "male",
  },
  {
    id: 3,
    name: "Ewan",
    age: 5,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeolpe = people.filter((person) => person.id === id);
  return filteredPeolpe[0];
};
