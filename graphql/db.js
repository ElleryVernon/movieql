 const movies = [
    {
      id: 0,
      name: "Star Wars - The new one",
      score: 1
    },
    {
      id: 1,
      name: "Avengers - The new one",
      score: 8
    },
    {
      id: 2,
      name: "The Godfather I",
      score: 99
    },
    {
      id: 3,
      name: "Logan",
      score: 2
    }
  ];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => id === person.id);
  return filteredPeople[0];
};
