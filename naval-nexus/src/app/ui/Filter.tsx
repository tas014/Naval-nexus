interface handleFilter {
    () : void
}

interface props {
    options: string[],
    category: string,
    handleFilter: handleFilter
}

const Filter = ({options, category, handleFilter}:props) => {
  return (
    <select name={category} id={category} onChange={handleFilter}>
        {options.map(option => <option value={option}>{option}</option>)}
    </select>
  )
}

export default Filter