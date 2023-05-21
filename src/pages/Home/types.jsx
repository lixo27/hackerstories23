import Proptypes from 'prop-types'

export const templateType = {
  welcome: Proptypes.object.isRequired,
  searchTerm: Proptypes.string.isRequired,
  onSearch: Proptypes.func.isRequired,
  items: Proptypes.array.isRequired,
  onRemoveItem: Proptypes.func.isRequired,
  isLoading: Proptypes.bool.isRequired,
  isError: Proptypes.bool.isRequired,
}
