import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState();

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName && newNumber) {
      const newPerson = {
        name: newName,
        number: newNumber,
      };
      const isPerson = persons.some((person) => person.name === newName);
      if (!isPerson) {
        setPersons(persons.concat(newPerson));
        setNewName("");
        setNewNumber("");
      } else {
        alert(`${newName} already added to phonebook`);
      }
    } else {
      alert("Enter a name and a number first!");
    }
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={handleSubmit}>
        <div>
          name:{" "}
          <input type="text" value={newName} onChange={handleNameChange} />
          <br />
          number:{" "}
          <input
            type="number"
            value={newNumber}
            onChange={handleNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>
          {person.name} {person.number}
        </div>
      ))}
    </div>
  );
}

export default App;
