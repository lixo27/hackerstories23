import { searchType } from './types'
import InputText from '../../../../components/InputText'

const Search = ({ searchTerm, onSearch, hasSearchFocus }) => (
  <>
    <InputText id="search" value={searchTerm} onChange={onSearch} hasFocus={hasSearchFocus}>
      <strong>Search:</strong>
    </InputText>

    <p>Searching for <strong>{searchTerm}</strong></p>
  </>
)

Search.propTypes = searchType

export default Search
