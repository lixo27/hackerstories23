import Proptypes from 'prop-types'

const Search = ({ searchTerm, onSearch }) => (
  <>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={onSearch}></input>

    <p>Searching for <strong>{searchTerm}</strong></p>
  </>
)

Search.propTypes = {
  searchTerm: Proptypes.string,
  onSearch: Proptypes.func,
}

export default Search
