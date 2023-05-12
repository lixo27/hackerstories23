import Proptypes from 'prop-types'

const Search = ({ search, onSearch }) => (
  <>
    <label htmlFor="search">Search:</label>
    <input id="search" type="text" onChange={onSearch}></input>

    <p>Searching for <strong>{search}</strong></p>
  </>
)

Search.propTypes = {
  search: Proptypes.string,
  onSearch: Proptypes.func,
}

export default Search
