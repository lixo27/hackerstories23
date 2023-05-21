import List from '../../features/Story/components/List'
import Search from '../../features/Story/components/Search'
import Greeting from '../../features/Welcome/components/Greeting'
import { templateType } from './types'

const Template = ({ welcome, searchTerm, onSearch, items, onRemoveItem }) => (
  <>
    <Greeting greeting={welcome.greeting} title={welcome.title} />
    <Search searchTerm={searchTerm} onSearch={onSearch} hasSearchFocus />

    <hr />
    <List items={items} onRemoveItem={onRemoveItem} />
  </>
)

Template.propTypes = templateType

export default Template
