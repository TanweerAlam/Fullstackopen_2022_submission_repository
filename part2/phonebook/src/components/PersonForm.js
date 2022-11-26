export const PersonForm = ({
  handleSubmit,
  newName,
  handleNameChange,
  newNumber,
  handleNumberChange,
}) => {
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <h2>add a new</h2>
        <div>
          name:{" "}
          <input type="text" value={newName} onChange={handleNameChange} />
          <br />
          number:{" "}
          <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};
