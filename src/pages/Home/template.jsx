import List from '../../features/Story/components/List'
import Search from '../../features/Story/components/Search'
import Greeting from '../../features/Welcome/components/Greeting'
import { templateType } from './types'

const Template = ({ welcome, searchTerm, onSearch, items, onRemoveItem, isLoading, isError }) => {
  return (
    <>
      <Greeting greeting={welcome.greeting} title={welcome.title} />
      <Search searchTerm={searchTerm} onSearch={onSearch} hasSearchFocus />

      <hr />

      {isError && <p>Something went wrong ...</p>}

      {isLoading ? (
        <p>Loading ...</p>
      ) : (
        <List items={items} onRemoveItem={onRemoveItem} />
      )}
    </>
  )
}

Template.propTypes = templateType

export default Template
