import Proptypes from 'prop-types'
import InputText from '../../../../components/InputText'

const Search = ({ searchTerm, onSearch, hasSearchFocus }) => (
  <>
    <InputText id="search" value={searchTerm} onChange={onSearch} hasFocus={hasSearchFocus}>
      <strong>Search:</strong>
    </InputText>

    <p>Searching for <strong>{searchTerm}</strong></p>
  </>
)

Search.propTypes = {
  hasSearchFocus: Proptypes.bool,
  onSearch: Proptypes.func,
  searchTerm: Proptypes.string,
}

export default Search
