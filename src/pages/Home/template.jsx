import Proptypes from 'prop-types'
import Greeting from '../../components/Greeting'
import List from '../../components/List'
import Search from '../../components/Search'

export default function Template({ welcome, searchTerm, onSearch, items }) {
  return (
    <>
      <Greeting greeting={welcome.greeting} title={welcome.title} />
      <Search searchTerm={searchTerm} onSearch={onSearch} />

      <hr />
      <List items={items} />
    </>
  )
}

Template.propTypes = {
  welcome: Proptypes.object,
  searchTerm: Proptypes.string,
  onSearch: Proptypes.func,
  items: Proptypes.array
}
