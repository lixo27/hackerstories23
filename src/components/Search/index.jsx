import Proptypes from 'prop-types'
import InputText from '../InputText'

const Search = ({ searchTerm, onSearch }) => (
  <>
    <InputText id="search" value={searchTerm} onChange={onSearch}>
      <strong>Search:</strong>
    </InputText>
    
    <p>Searching for <strong>{searchTerm}</strong></p>
  </>
)

Search.propTypes = {
  searchTerm: Proptypes.string,
  onSearch: Proptypes.func,
}

export default Search
