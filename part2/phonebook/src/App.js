import { useState } from "react";

function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");

  const handleChange = (event) => {
    setNewName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (newName) {
      const newPerson = {
        name: newName,
      };
      const isPerson = persons.some((person) => person.name === newName);
      if (!isPerson) {
        setPersons(persons.concat(newPerson));
        setNewName("");
      } else {
        alert(`${newName} already added to phonebook`);
      }
    } else {
      alert("Enter a name first!");
    }
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <div>debug: {newName}</div>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input type="text" value={newName} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map((person) => (
        <div key={person.name}>{person.name}</div>
      ))}
    </div>
  );
}

export default App;
