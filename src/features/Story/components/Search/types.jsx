import Proptypes from 'prop-types'

export const searchType = {
    onSearch: Proptypes.func.isRequired,
    searchTerm: Proptypes.string.isRequired,
    hasSearchFocus: Proptypes.bool,
}
