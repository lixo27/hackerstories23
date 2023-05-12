import Proptypes from 'prop-types'

export default function Search({ searchTerm, onSearch }) {
  return (
    <>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" onChange={onSearch}></input>

      <p>Searching for <strong>{searchTerm}</strong></p>
    </>
  )
}

Search.propTypes = {
  onSearch: Proptypes.func,
  searchTerm: Proptypes.string,
}
