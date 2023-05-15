import Proptypes from 'prop-types'
import List from '../../features/Story/components/List'
import Search from '../../features/Story/components/Search'
import Greeting from '../../features/Welcome/components/Greeting'

const Template = ({ welcome, searchTerm, onSearch, items }) => (
  <>
    <Greeting greeting={welcome.greeting} title={welcome.title} />
    <Search searchTerm={searchTerm} onSearch={onSearch} hasSearchFocus />

    <hr />
    <List items={items} />
  </>
)

Template.propTypes = {
  welcome: Proptypes.object,
  searchTerm: Proptypes.string,
  onSearch: Proptypes.func,
  items: Proptypes.array
}

export default Template
