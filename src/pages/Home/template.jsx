import Proptypes from 'prop-types'
import List from '../../features/Story/components/List'
import Search from '../../features/Story/components/Search'
import Greeting from '../../features/Welcome/components/Greeting'

const Template = ({ welcome, searchTerm, onSearch, items, onRemoveItem }) => (
  <>
    <Greeting greeting={welcome.greeting} title={welcome.title} />
    <Search searchTerm={searchTerm} onSearch={onSearch} hasSearchFocus />

    <hr />
    <List items={items} onRemoveItem={onRemoveItem} />
  </>
)

Template.propTypes = {
  welcome: Proptypes.object,
  searchTerm: Proptypes.string,
  onSearch: Proptypes.func,
  items: Proptypes.array,
  onRemoveItem: Proptypes.func,
}

export default Template
