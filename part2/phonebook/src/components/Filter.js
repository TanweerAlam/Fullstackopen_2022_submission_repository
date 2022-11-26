export const Filter = ({ newSearch, setNewSearch }) => {
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value);
  };

  return (
    <div>
      <p>
        filter shown with{" "}
        <input type="text" value={newSearch} onChange={handleSearchChange} />
      </p>
    </div>
  );
};
