import {filterStoriesByTitle} from '../../features/Story/services/collection'
import {stories} from '../../features/Story/services/dummy'
import {welcome} from '../../features/Welcome/services/dummy'
import {useStorageState} from '../../hooks'
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
