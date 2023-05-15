import {filterStoriesByTitle} from '../../features/Story/services/Collection'
import {stories} from '../../features/Story/services/Dummy'
import {welcome} from '../../features/Welcome/services/Dummy'
import useStorageState from '../../hooks/useStorageState'
import Template from './template'

const Home = () => {
  const [searchTerm, setSearchTerm] = useStorageState('searchTerm', 'React')
  const searchedStories = filterStoriesByTitle(stories, searchTerm)

  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
  }

  return (
    <Template
      welcome={welcome}
      searchTerm={searchTerm}
      onSearch={handleSearch}
      items={searchedStories}
    />
  )
}

export default Home
