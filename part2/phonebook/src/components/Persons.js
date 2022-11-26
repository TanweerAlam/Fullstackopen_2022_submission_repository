export const Persons = ({ newSearch, persons }) => {
  console.log(persons);
  return (
    <div>
      <h2>Numbers</h2>
      {persons
        .filter((person) => person.name.toLowerCase().includes(newSearch))
        .map((person) => (
          <div key={person.id}>
            {person.name} {person.number}
          </div>
        ))}
    </div>
  );
};
