// create one FilterButton component
// label is displayed to user
// setFilter is function to filter to filterName on button click
function FilterButton({ label, setFilter, filterName }) {
  return <button onClick={() => setFilter(filterName)}>{label}</button>;
}

export default FilterButton;
